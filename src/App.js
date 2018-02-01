import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){}

  render() {
    return (
      <div className="App">
      <h1>Hello There</h1>
      </div>
    );
  }
}

export default App;
