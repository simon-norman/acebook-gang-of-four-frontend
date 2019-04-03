import config from '../config.js';
import api from '../api.js'

const postApi = {
  createPost: function(post, callback) {
    const authHeaders = JSON.parse(sessionStorage.user)
    api.call(post, 'POST', `${config.acebookApi}/posts`, callback, authHeaders)
  },

  getPosts: function(callback) {
    const xhttp = new XMLHttpRequest();
    const url = `${config.acebookApi}/posts`

    xhttp.open("GET", url, true);
    xhttp.setRequestHeader( "Content-Type", "application/json");
    const sessionUser = sessionStorage.user
    const user = JSON.parse(sessionUser)
    const token = user['access-token']
    xhttp.setRequestHeader('access-token', token)
    const client = user['client']
    xhttp.setRequestHeader('client', client)
    const uid = user['uid']
    xhttp.setRequestHeader('uid', uid)

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const json = JSON.parse(xhttp.responseText)
        callback(json)
      }
      else {console.log("Failed to get posts.")}
    }
    
    xhttp.send()
  }
}

export default postApi;