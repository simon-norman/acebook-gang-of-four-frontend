import config from '../config.js';

const postApi = {
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