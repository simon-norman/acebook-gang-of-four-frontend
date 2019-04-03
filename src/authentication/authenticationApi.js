import api from '../api.js'
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react';

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
      const userCredentials = JSON.stringify({
        'access-token': xhttp.getResponseHeader('access-token'),
        client: xhttp.getResponseHeader('client'),
        uid: xhttp.getResponseHeader('uid')
      })
      sessionStorage.setItem('user', userCredentials)

      callback()
    }
  },

  logOut: function(callback) {
    const sessionUser = sessionStorage.user
    
    api.call(JSON.parse(sessionUser),'DELETE','http://localhost:4000/auth/sign_out', function() {
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

export default authenticationApi;