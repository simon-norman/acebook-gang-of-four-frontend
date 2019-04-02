const signIn = {
  completeSignIn: function(userCredentials) {
    sessionStorage.setItem('user', userCredentials)
  }
}

export default signIn;