import config from '../config.js';
import authenticationApi from '../authentication/authenticationApi'

const postApi = {
  createPost: function(post, callback) {
    authenticationApi.call({ 
      data: post, 
      verb: 'POST', 
      url: `${config.acebookApi}/posts`, 
      callback
    })
  },

  getPosts: function(callback) {
    authenticationApi.call({ 
      data: '', 
      verb: 'GET', 
      url: `${config.acebookApi}/posts`, 
      callback: this.extractPostsFromResponse(callback)
    })
  },

  extractPostsFromResponse: function(callback) {
    return function (xhttp) {
      const posts = JSON.parse(xhttp.response)

      callback(posts)
    }
  }
}

export default postApi;