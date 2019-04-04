import config from '../config.js';
import api from '../services/api.js'

const postApi = {
  createPost: function(post, callback) {
    const authHeaders = JSON.parse(sessionStorage.user)
    api.call(post, 'POST', `${config.acebookApi}/posts`, callback, authHeaders)
  },

  updatePost: function(post, callback) {
    const authHeaders = JSON.parse(sessionStorage.user)
    api.call(post, 'PATCH', `${config.acebookApi}/posts/${post.post.id}`, callback, authHeaders)
    callback()
  },

  getPosts: function(callback) {
    const authHeaders = JSON.parse(sessionStorage.user)
    api.call("", 'GET', `${config.acebookApi}/posts`, this.extractPostsFromResponse(callback), authHeaders)
  },

  extractPostsFromResponse: function(callback) {
    return function (xhttp) {
      const posts = JSON.parse(xhttp.response)

      callback(posts)
    }
  }
}

export default postApi;