import React, { Component } from 'react';
import Timeline from './posts/Timeline'
import NavBar from './NavBar'
import './App.scss';
import Registration from './authentication/Registration'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './authentication/SignIn';
import PrivateRoute from './PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="body-content">
          <Switch>
            <PrivateRoute exact path='/' component={Timeline}/>
            <Route path='/sign-up' component={Registration}/>
            <PrivateRoute path='/posts' component={Timeline}/>
            <Route path='/sign-in' component={SignIn}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
