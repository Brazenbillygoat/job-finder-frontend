import React, { Component } from 'react';

export default class LoginForm extends Component {

  render() {
    return(

      <div class="login-div">
        <form>
          <h2 class="login-header">Login</h2>
          <label>
            <h4>Username:</h4>
            <input type="text" value="{username}" />
          </label>
          <br/>
          <label>
          <h4>Password:</h4>
            <input type="password" value="{password}" />
          </label>
          <br/>
          <input class="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>

    )
  }
}
