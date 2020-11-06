import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'


export default class LoginContainer extends Component {

  render() {
    return(
      <header className="App-header">
        <img src={'https://www.wraltechwire.com/wp-content/uploads/2019/02/jobs-hiring-help-wanter.jpg'} className="App-logo" alt="logo" />
        <p>
          Find your next Job
        </p>
        <LoginForm />

      </header>

    )
  }
}

