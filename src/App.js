import React, { Component } from 'react';
import Timeline from './Timeline'
import NavBar from './NavBar'
import './App.scss';
import Registration from './authentication/Registration'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <BrowserRouter>
          <Route path='/sign-up' component={Registration}/>
          <Route path='/posts' component={Timeline}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
