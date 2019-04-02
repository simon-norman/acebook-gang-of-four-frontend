import React, { Component } from 'react';
import signInApi from './signInApi';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signInUser = this.signInUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }


handleInputChange(event){
  const name = event.target.name
  const value = event.target.value

  this.setState({[name]: value})
}

signInUser(event) {
  event.preventDefault();
  signInApi.signIn(this.state, this.loginUser)
}

loginUser(userCredentials) {
  signInApi.completeSignIn(userCredentials)
  this.props.history.push('/posts')
}

render() {
  return (
    <div className='center-form'>
      <div className='form-title'>Sign In</div>
      <form onSubmit={this.signInUser}>
        <div className='form-item'>
          Email: 
          <input type='email' name='email' onChange={this.handleInputChange} className='form-control'/>
        </div>
        <div className='form-item'>
          Password: 
          <input type='password' name='password' onChange={this.handleInputChange} className='form-control'/>
        </div>
        <input type='submit' className="btn btn-outline-primary"/>
      </form>
    </div>
  )
}
}

export default SignIn;