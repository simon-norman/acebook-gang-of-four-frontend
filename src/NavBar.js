import React, { Component } from 'react';
import authenticationApi from './authentication/authenticationApi';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.redirectToSignIn = this.redirectToSignIn.bind(this);
  }

  render(){
    return (
      <nav className="navbar navbarDefault navbarFixedTop bgLight">
        <div className="container">
          <a className='navbarBrand' href="/">Acebook</a>
          <button onClick={this.logOut} className="btn btnOutlinePrimary">Log out</button>
        </div>
      </nav>
    );
  }

  logOut(){
    if (sessionStorage.user){
    authenticationApi.logOut(this.redirectToSignIn)}
  }
  redirectToSignIn(){
    sessionStorage.removeItem('user')
    console.log(this.props)
    this.props.history.push('/sign-in')
  }
}

export default withRouter(NavBar);