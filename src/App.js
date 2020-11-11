
import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer'
const baseUrl = 'http://localhost:3000';


export default class App extends Component {

  state = {
    newuser: false,
    loggedIn: false 
  }

updateNewUser = (newuser) => {
  this.setState({ newuser })
}

async componentDidMount(){
  if(localStorage.getItem("token")){
    const headers = {headers: {"Authentication": `Bearer ${localStorage.getItem("token")}`}}
    const res = await fetch(`${baseUrl}/home`, headers)
    const currentUser = await res.json()
    console.log(currentUser)
    // this.setState({currentUser, loading: false})

  }else {
    console.log("no tokey");
    // this.setState({loading: false})
  }
}

authorizeUser = (e) => {
  e.preventDefault();
  let login = {
    name: e.currentTarget.elements[0].value, 
    password: e.currentTarget.elements[1].value
  }
  
  if (this.state.newuser === false) {
    fetch(`${baseUrl}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem("token", user.token)
      // localStorage.setItem("userName", JSON.stringify(user.name))
    })
    
  } else {
      let signUp = {
        name: e.currentTarget.elements[0].value, 
        password: e.currentTarget.elements[1].value,
        isGovernment: e.currentTarget.elements[3].value === "true" ? true : false
      }
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
      
        
          {/* uncomment when needed */}
          <LoginContainer 
          authorizeUser={this.authorizeUser}
          newUser={this.state.newuser}
          updatenewuser={this.updateNewUser}
        />
        <MainContainer />
      </div>
    );
  }
}


