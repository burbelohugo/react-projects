import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
        <h1>Hi, I'm a react app</h1>
      </div>
    );
  }
}

export default App;
