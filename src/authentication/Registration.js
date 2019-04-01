import React, { Component } from 'react';
import registrationApi from './registrationApi';
import signIn from './signIn';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value

    this.setState({[name]: value})
  }

  registerUser(event) {
    event.preventDefault();
    registrationApi.register(this.state, this.loginUser)
  }

  loginUser(userSessionData) {
    signIn.completeSignIn(userSessionData)
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div>
      <h2>Sign Up</h2>
      <form onSubmit={this.registerUser}>
        Email: <input type='email' name='email' onChange={this.handleInputChange}/><br></br>
        Password: <input type='password' name='password' onChange={this.handleInputChange}/><br></br>
        Confirm Password: <input type='password' name='password_confirmation' onChange={this.handleInputChange}/><br></br>
        <input type='submit'/>
        </form>
        </div>
    )
    }
}

export default Registration;