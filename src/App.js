import React, { Component } from 'react';
import Timeline from './Timeline'
import NavBar from './NavBar'
import './App.scss';
import Registration from './authentication/Registration'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './authentication/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="body-content">
          <Switch>
            <Route path='/sign-up' component={Registration}/>
            <Route path='/posts' component={Timeline}/>
            <Route path='/sign-in' component={SignIn}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
