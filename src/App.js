
import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';

export default class App extends Component {

  state = {
    newuser: true
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
  
  console.log(userCreds)
  // fetch('path TBD from Abdul', {
  //   method: ''
  // })
}

  
  render() {
    return (
      <div className="App">
        <LoginContainer 
          authorizeUser={this.authorizeUser}
          userExists={this.state.newuser}
          updatenewuser={this.updateNewUser}
        />
      </div>
    );
  }
}


