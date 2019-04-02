import React, { Component } from 'react';
import Timeline from './Timeline'
import NavBar from './NavBar'
import './App.scss';
import Registration from './authentication/Registration'
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './authentication/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="body-content">
          <BrowserRouter>
            <Route path='/sign-up' component={Registration}/>
            <Route path='/posts' component={Timeline}/>
            <Route path='/sign-in' component={SignIn}/>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
