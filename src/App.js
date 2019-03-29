import React, { Component } from 'react';
import Timeline from './Timeline'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline name='Simn' />
      </div>
    );
  }
}

export default App;
