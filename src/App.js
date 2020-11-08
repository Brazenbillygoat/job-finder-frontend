
import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';
let baseUrl = 'http://localhost:3000';


export default class App extends Component {

  state = {
    newuser: false
  }

updateNewUser = (newuser) => {
  this.setState({ newuser })
}

authorizeUser = (e, username, password) => {
  e.preventDefault();
  let userCreds = {
    username: e.currentTarget.elements[0].value, 
    password: e.currentTarget.elements[1].value
  }
  
  if (this.state.newuser === false) {
    console.log("I will log this user in")
    
  } else {
    console.log("I will create a  new user")
        fetch(`${baseUrl}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userCreds)
        })
        .then(res => res.json())
        .then(data => {
          console.log("hello")
        })
        .catch((error) => {
          console.log('Error:', error)
        })
  }
}

  
  render() {
    return (
      <div className="App">
        <LoginContainer 
          authorizeUser={this.authorizeUser}
          newUser={this.state.newuser}
          updatenewuser={this.updateNewUser}
        />
      </div>
    );
  }
}


