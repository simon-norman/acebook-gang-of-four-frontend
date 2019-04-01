const signIn = {
  completeSignIn: function(user) {
    sessionStorage.setItem('user', user)
  }
}

export default signIn;