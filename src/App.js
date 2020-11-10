
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
  let login = {
    name: e.currentTarget.elements[0].value, 
    password: e.currentTarget.elements[1].value
  }
  let signUp = {
    name: e.currentTarget.elements[0].value, 
    password: e.currentTarget.elements[1].value,
    isGovernment: e.currentTarget.elements[3].value === "true" ? true : false
  }
  
  if (this.state.newuser === false) {
    fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(user => {
        localStorage.setItem("userId", JSON.stringify(user.id))
        localStorage.setItem("userName", JSON.stringify(user.name))
    })
    
  } else {
        fetch(`${baseUrl}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signUp)
        })
        .then(res => res.json())
        .then(user => {
          localStorage.setItem("userId", JSON.stringify(user.id))
          localStorage.setItem("userName", JSON.stringify(user.name))
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


