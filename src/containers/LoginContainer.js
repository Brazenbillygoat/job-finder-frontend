import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'


export default class LoginContainer extends Component {

  state = {
    username: "",
    password: ""
  }

  updateUsername = (username) => {
    this.setState({username})
  }

  updatePassword = (password) => {
    this.setState({password})
  }

  render() {
    return(
      <header className="App-header">
        <img src={'https://www.wraltechwire.com/wp-content/uploads/2019/02/jobs-hiring-help-wanter.jpg'} className="App-logo" alt="logo" />
        <p>
          Find your next Job
        </p>
        <LoginForm 
          username={this.state.username}
          password={this.state.password}
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          submitForm={this.props.authorizeUser}
        />

      </header>

    )
  }
}

