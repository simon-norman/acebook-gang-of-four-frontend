import React, { Component } from 'react';
import authentication from './authentication';
import { Link } from 'react-router-dom'

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signInUser = this.signInUser.bind(this);
    this.redirectToTimeline = this.redirectToTimeline.bind(this);
  }


handleInputChange(event){
  const name = event.target.name
  const value = event.target.value

  this.setState({[name]: value})
}

signInUser(event) {
  event.preventDefault();
  authentication.signIn(this.state, this.redirectToTimeline)
}

redirectToTimeline() {
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
          <div className='sign-up-msg'>
            New to Acebook?
            <Link to="/sign-up"> Sign up here!</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
