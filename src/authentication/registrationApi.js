import api from '../api.js'

const registrationApi = {
  register: function(user, callback) {
    api.call(user,'POST','http://localhost:4000/auth',this.completeSignIn(callback))
  },
  completeSignIn: function(callback) {
    return function (xhttp) {
    callback(xhttp)
  }
}
}
export default registrationApi;