import React, { Component } from 'react';
import authentication from './authentication/authentication';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top bg-light">
        <div className="container">
          <a className='navbar-brand' href="/">Acebook</a>
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