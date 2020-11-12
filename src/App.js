
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer'
let baseUrl = 'http://localhost:3000';


export default class App extends Component {

  state = {
    newuser: false,
    loggedIn: false,
    isGovernment: !!localStorage.getItem("isGovernment")
  }

updateNewUser = (newuser) => {
  this.setState({ newuser })
}

updateIsGovernment = (val) => {
  let isGovernment;
  val === "true" ? isGovernment = false : isGovernment = true
  this.setState({isGovernment})
}

async componentDidMount(){
  if(localStorage.getItem("token")){
    const headers = {headers: {"Authentication": `Bearer ${localStorage.getItem("token")}`}}
    const res = await fetch(`${baseUrl}/home`, headers)
    const currentUser = await res.json()
    console.log(currentUser)

  }else {
    console.log("no tokey");
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
        localStorage.setItem("isGovernment", user["user"]["isGovernment"])
        localStorage.setItem("id", user["user"]["id"])
        window.location.reload()
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
            this.setState({ isGovernment: user["user"]["isGovernment"] })
            localStorage.setItem("token", user.token)
            localStorage.setItem("isGovernment", user["user"]["isGovernment"])
            localStorage.setItem("id", user["user"]["id"])
            window.location.reload()
          })
          .catch((error) => {
            console.log('Error:', error)
          })
    }
    
  }

  tokenExist = () => {
    if(localStorage.getItem("token")){
      return(
        <MainContainer
          isGovernment={this.state.isGovernment}
          updateIsGovernment={this.updateIsGovernment}
        />
      )
    }
    return(
      <LoginContainer 
          authorizeUser={this.authorizeUser}
          newUser={this.state.newuser}
          isGovernment={this.state.isGovernment}
          updatenewuser={this.updateNewUser}
          updateIsGovernment={this.updateIsGovernment}
        />
    )
  }
  
  render() {
    return (
      <div className="App">  
        {this.tokenExist()}
      </div>
    );
  }
}

{/* <Router>
          <Switch>
          <Route path="/login" render={() => {
                        return(
                          <LoginContainer 
                          authorizeUser={this.authorizeUser}
                          newUser={this.state.newuser}
                          updatenewuser={this.updateNewUser}
                        />
                        )}
                    }/>
          </Switch>
          <Switch>
          <Route path="/home" render={() => {
                        return(
                          <MainContainer />
                        )}
                    }/>
          </Switch>
        </Router> */}
