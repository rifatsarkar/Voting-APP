import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Voting from './Voting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Voting />
      </div>
    );
  }
}

export default App;
