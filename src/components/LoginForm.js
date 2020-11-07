import React, { Component } from 'react';

export default class LoginForm extends Component {



  
  render() {

    const { username, 
            password, 
            confirmPassword,
            updateUsername, 
            updatePassword, 
            submitForm, 
            formlabel, 
            updateConfirmPassword,
            passwordsMatch
          } = this.props
      
    const passwordConfirmation = () => {
        if (formlabel === "Log In") {
          return (
            <label>
            <h4>Password:</h4>
              <input class="login-input"
                    type="password" 
                    value={password}
                    onChange={(e) => updatePassword(e.target.value)}
              />
            </label>
          )
        }
        return (
          <label>
            <h4>Password:</h4>
            <input class="login-input"
                  type="password" 
                  value={password}
                  onChange={(e) => updatePassword(e.target.value)}
            />
            <br />
            {passwordsMatch()}
            <h4>Re-enter Password:</h4>
              <input class="login-input"
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => updateConfirmPassword(e.target.value)}
              />
          </label>
        )
      }

    return(
      <div class="login-div">
        <form onSubmit={(e) => submitForm(e)}>
          <h2 class="login-header">{formlabel}</h2>
          <label>
            <h4>Username:</h4>
            <input class="login-input"
                   type="text" 
                   value={username} 
                   onChange={(e) => updateUsername(e.target.value)} 
            />
          </label>
          <br/>
          {passwordConfirmation()}
          <br/>
          <input class="btn btn-primary" type="submit" value={formlabel} />
        </form>
      </div>

    )
  }
}
