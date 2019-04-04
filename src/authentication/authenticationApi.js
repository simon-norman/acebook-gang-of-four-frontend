import api from '../services/api.js'
import config from '../config.js'

const authenticationApi = {
  authenticate: function(user, url, callback) {
    api.call(user, 'POST', url, this.addUserAuthToSession(callback))
  },

  register: function(user, callback) {
    this.authenticate(user,`${config.acebookApi}/auth`, callback)
  },

  signIn: function(user, callback) {
    this.authenticate(user,`${config.acebookApi}/auth/sign_in`, callback)
  },

  addUserAuthToSession: function(callback) {
    return (xhttp) => {
      if (xhttp.getResponseHeader('access-token')) {
        const userCredentials = JSON.stringify({
          'access-token': xhttp.getResponseHeader('access-token'),
          client: xhttp.getResponseHeader('client'),
          uid: xhttp.getResponseHeader('uid'),
          userId: this.getLatestUserId(xhttp.response)
        })
        sessionStorage.setItem('user', userCredentials)
      }
      callback(xhttp)
    }
  },

  getLatestUserId: function(response) {
    if (JSON.parse(response).data) {
      return JSON.parse(response).data.id
    } else {
      return JSON.parse(sessionStorage.user).userId
    }
  },

  logOut: function(callback) {
    const sessionUser = sessionStorage.user
    
    api.call(JSON.parse(sessionUser),'DELETE',`${config.acebookApi}/auth/sign_out`, function() {
      sessionStorage.removeItem('user')  
      callback()
    })
  },

  call: function({ data, verb, url, callback }) {
    const authHeaders = JSON.parse(sessionStorage.user)
    api.call(data, verb, url, this.addUserAuthToSession(callback), authHeaders)
  }
}

export default authenticationApi;