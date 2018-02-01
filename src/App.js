import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      img: '',
      type: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(){
   console.log('clicky');
   axios.get(`https://api.github.com/users/samcatherman`)
   .then(res => this.setState(
     {
       username: res.data.name,
       img: res.data.avatar_url,
       type: res.data.type
     }
   ))
  }

  handleSubmit(event){
    console.log("A name was searched: " + this.state.username);
    event.preventDefault()
  }

  render() {
    return (
      <div className="button_container">
  <form onSubmit={this.handleSubmit}>
    <label>
      Enter a Github Username:
    </label>
    <input type="text" name="username"></input>
  </form>
        <button className='button' onClick={this.handleClick}>Find User</button>
        <h3>{this.state.type}</h3>
        <p>{this.state.username}</p>
        <img src={this.state.img}/>
      </div>
    );
  }
}

export default App;
