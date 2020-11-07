import React, { Component } from 'react';

export default class NavBar extends Component {

  navbarSignupOrLoginButton = () => {
    if (!this.props.userExists) {
      return (
        <button class="navbar-signup" onClick={() => {this.props.updatenewuser(true);
                                                 this.props.resetForm();  
                                                }
                                          }>
          Login
        </button>
      )
    }
    return(
      <button class="navbar-signup" onClick={() => {this.props.updatenewuser(false);
                                               this.props.resetForm();
                                              }
                                        }>
        Sign Up
      </button>
    )
    
  }

  render() {

    return(
      <div>
        <nav class="navbar  navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="images/hardhat-worker.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
            Job Finder
          </a>
          {this.navbarSignupOrLoginButton()}
        </nav>
      </div>
    )
  }


}