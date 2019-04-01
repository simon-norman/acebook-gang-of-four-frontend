import React, { Component } from 'react';
import Timeline from './Timeline'
import Registration from './authentication/Registration'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Timeline name='Simn' /> */}
        <BrowserRouter>
          <Route path='/sign-up' component={Registration}/>
          <Route path='/posts' component={Timeline}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
