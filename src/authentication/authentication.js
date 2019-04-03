import api from '../api.js'
import config from '../config.js'
import { Redirect } from 'react-router-dom'
import React from 'react';

const authentication = {
  authenticate: function(user, url, callback) {
    api.call(user, 'POST', url, this.completeSignIn(callback))
  },

  register: function(user, callback) {
    this.authenticate(user,`${config.acebookApi}/auth`, callback)
  },

  signIn: function(user, callback) {
    this.authenticate(user,`${config.acebookApi}/auth/sign_in`, callback)
  },

  completeSignIn: function(callback) {
    return function(xhttp) {
      const userCredentials = JSON.stringify({
        'access-token': xhttp.getResponseHeader('access-token'),
        client: xhttp.getResponseHeader('client'),
        uid: xhttp.getResponseHeader('uid'),
        userId: JSON.parse(xhttp.response).data.id
      })
      sessionStorage.setItem('user', userCredentials)

      callback()
    }
  },

  logOut: function(callback) {
    const sessionUser = sessionStorage.user
    
    api.call(JSON.parse(sessionUser),'DELETE',`${config.acebookApi}/auth/sign_out`, function() {
      sessionStorage.removeItem('user')  
      callback()
    })
  },

  redirectIfLoggedOut: function(component) {
    if (sessionStorage.user) {
      return component
    }
    return (<Redirect to='/sign-in'/>);
  }
}

export default authentication;