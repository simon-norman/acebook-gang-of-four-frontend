import React, { Component } from 'react';
import authentication from './authentication/authentication';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.redirectToSignIn = this.redirectToSignIn.bind(this);
  }

  render() {
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
    if (sessionStorage.user) {
      authentication.logOut(this.redirectToSignIn)
    }
  }

  redirectToSignIn() {
    this.props.history.push('/sign-in')
  }
}

export default withRouter(NavBar);