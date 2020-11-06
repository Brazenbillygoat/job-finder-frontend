import React, { Component } from 'react';

export default class LoginForm extends Component {

  
  render() {
    const { username, password, updateUsername, updatePassword, submitForm } = this.props
    return(

      <div class="login-div">
        <form onSubmit={(e) => submitForm(e)}>
          <h2 class="login-header">Login</h2>
          <label>
            <h4>Username:</h4>
            <input class="login-input"
                   type="text" 
                   value={username} 
                   onChange={(e) => updateUsername(e.target.value)} 
            />
          </label>
          <br/>
          <label>
          <h4>Password:</h4>
            <input class="login-input"
                   type="password" 
                   value={password}
                   onChange={(e) => updatePassword(e.target.value)}
            />
          </label>
          <br/>
          <input class="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>

    )
  }
}
