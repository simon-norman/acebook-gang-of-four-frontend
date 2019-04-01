import React, { Component } from 'react';
import Timeline from './Timeline'
import NavBar from './NavBar'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Timeline name='Simon' />
      </div>
    );
  }
}

export default App;
