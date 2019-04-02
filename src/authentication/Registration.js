import React, { Component } from 'react';
import authenticationApi from './authenticationApi';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.redirectToTimeline = this.redirectToTimeline.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value

    this.setState({[name]: value})
  }

  registerUser(event) {
    event.preventDefault();
    authenticationApi.register(this.state, this.redirectToTimeline)
  }

  redirectToTimeline() {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div className='center-form'>
        <div className='form-title'>Sign Up</div>
        <form onSubmit={this.registerUser}>
          <div className='form-item'>
            Email: 
            <input type='email' name='email' onChange={this.handleInputChange} className='form-control'/>
          </div>
          <div className='form-item'>
            Password: 
            <input type='password' name='password' onChange={this.handleInputChange} className='form-control'/>
          </div>
          <div className='form-item'>
            Confirm Password: 
            <input type='password' name='password_confirmation' onChange={this.handleInputChange} className='form-control'/>
          </div>
          <input type='submit' className="btn btn-outline-primary"/>
        </form>
      </div>
    )
  }
}

export default Registration;