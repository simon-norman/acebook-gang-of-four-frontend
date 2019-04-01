import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value

    this.setState({[name]: value})
  }

  registerUser(event) {
    event.preventDefault();
    console.log(1)
      var xhttp = new XMLHttpRequest();
      var url = 'http://localhost:4000/auth'
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          var json = JSON.parse(xhttp.responseText)
          console.log(json)
        }
        else {console.log("This hasn't worked")}
      }
      var data = JSON.stringify(this.state)
      xhttp.send(data)
  }
  render() {
    return (
      <div>
      <h2>Sign Up</h2>
      <form onSubmit={this.registerUser}>
        Email: <input type='email' name='email' onChange={this.handleInputChange}></input><br></br>
        Password: <input type='password' name='password' onChange={this.handleInputChange}></input><br></br>
        Confirm Password: <input type='password' name='password_confirmation' onChange={this.handleInputChange}></input><br></br>
        <input type='submit'></input>
        </form>
        </div>
    )
    }
}

export default Registration;