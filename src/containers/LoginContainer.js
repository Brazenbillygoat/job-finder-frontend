import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';


export default class LoginContainer extends Component {
  
  // { authorizeUser, userExists } = this.props

  state = {
    username: "",
    password: "",
    confirmPassword: ""
  }

  //this changes what the button ad label at the top of the LoginForm will display

  formLabel =() => {
    if (this.props.userExists) {
      return "Log In"
    } 
    return "Sign Up"
  }

  resetForm = () => {
    this.setState({
      username: "",
      password: "",
      confirmPassword: ""
    })
  }
  
  updateUsername = (username) => {
    this.setState({username})
  }
  
  updatePassword = (password) => {
    this.setState({password})
  }

  updateConfirmPassword = (confirmPassword) => {
    this.setState({confirmPassword},() => {
      this.passwordsMatchOnSignup()
    })
  }

  passwordsMatchOnSignup = () => {
    if (this.state.password 
        && 
        this.state.confirmPassword 
        && 
        this.state.password !== this.state.confirmPassword) {
      console.log("they don't match")
      return <small class="signup-password-validation">Passwords must match.</small>
    }
  }
  
  render() {
    return(
      <div>
        <NavBar 
          userExists={this.props.userExists}
          updatenewuser={this.props.updatenewuser} 
          resetForm={this.resetForm}
        />
        <header className="App-header">
          <img src={'https://www.wraltechwire.com/wp-content/uploads/2019/02/jobs-hiring-help-wanter.jpg'} className="App-logo" alt="logo" />
          <p>
            Find your next Job
          </p>
          <LoginForm 
            username={this.state.username}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            updateUsername={this.updateUsername}
            updatePassword={this.updatePassword}
            updateConfirmPassword={this.updateConfirmPassword}
            passwordsMatch={this.passwordsMatchOnSignup}
            submitForm={this.props.authorizeUser}
            formlabel={this.formLabel()}
          />

        </header>
      </div>
    )
  }
}

