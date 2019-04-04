import React, { Component } from 'react';
import authentication from './authentication/authentication';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top bg-light">
        <div className="container">
          <div className="links">
            <a className='navbar-item logo' href="/">Acebook</a>
            <a className='navbar-item' href="/sign-up">Sign up</a>
            <a className='navbar-item' href="/sign-in">Sign in</a>
          </div>
          <button onClick={this.logOut} className="btn btn-outline-primary">Log out</button>
        </div>
      </nav>
    );
  }

  logOut = () => {
    if (sessionStorage.user) {
      authentication.logOut(this.redirectToSignIn)
    }
  }

  redirectToSignIn = () => {
    this.props.history.push('/sign-in')
  }
}

export default withRouter(NavBar);