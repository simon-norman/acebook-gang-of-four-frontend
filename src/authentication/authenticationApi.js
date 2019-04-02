import api from '../api.js'

const authenticationApi = {
  authenticate: function(user, url, callback) {
    api.call(user, 'POST', url, this.completeSignIn(callback))
  },

  register: function(user, callback) {
    this.authenticate(user,'http://localhost:4000/auth', callback)
  },

  signIn: function(user, callback) {
    this.authenticate(user,'http://localhost:4000/auth/sign_in', callback)
  },

  completeSignIn: function(callback) {
    return function(xhttp) {
      const userCredentials = {
        'access-token': xhttp.getResponseHeader('access-token'),
        client: xhttp.getResponseHeader('client'),
        uid: xhttp.getResponseHeader('uid')
      }
      sessionStorage.setItem('user', userCredentials)

      callback()
    }
  }
}

export default authenticationApi;