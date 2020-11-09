import React, { Component } from 'react';

export default class LoginForm extends Component {



  
  render() {

    const { username, 
            password, 
            confirmPassword,
            isGovernment,
            updateUsername, 
            updatePassword, 
            updateConfirmPassword,
            updateIsGovernment,
            submitForm, 
            formlabel, 
            passwordsMatch
          } = this.props
      
    //the below method decides whether to display one or two password entry forms
    //depending on whether someone is signing up or logging in
    //and calls a method to validate that the passwords match
    const passwordConfirmation = () => {
        if (formlabel === "Sign Up") {
          return (
            <div>
              <label>
                <h4>Password:</h4>
                <input className="login-input"
                      type="password" 
                      value={password}
                      onChange={(e) => updatePassword(e.target.value)}
                />
                <br />
                {passwordsMatch()}
                <h4>Re-enter Password:</h4>
                  <input className="login-input"
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => updateConfirmPassword(e.target.value)}
                  />
              </label>
              <br />
              <label>
                <input id="is-government-radio"
                       type="checkbox" 
                       value={isGovernment} 
                       defaultChecked={isGovernment} 
                       onChange={(e) => {
                        updateIsGovernment(e.target.value)
                       }}/>
                       Goverment Agency
              </label>

            </div>
          )
        }
          return (
            <label>
            <h4>Password:</h4>
              <input className="login-input"
                    type="password" 
                    value={password}
                    onChange={(e) => updatePassword(!e.target.value)}
              />
            </label>
          )
        }

    return(
      <div className="login-div">
        <form onSubmit={(e) => submitForm(e)}>
          <h2 className="login-header">{formlabel}</h2>
          <label>
            <h4>Username:</h4>
            <input className="login-input"
                   type="text" 
                   value={username} 
                   onChange={(e) => updateUsername(e.target.value)} 
            />
          </label>
          <br/>
          {passwordConfirmation()}
          <br/>
          <input className="btn btn-primary" type="submit" value={formlabel} />
        </form>
      </div>

    )
  }
}
