import React, { Component } from 'react';

export default class NavBar extends Component {

  navbarSignupOrLoginButton = () => {
    if (!this.props.newUser) {
      return (
        <button className="navbar-signup" onClick={() => {this.props.updatenewuser(true);
                                                 this.props.resetForm();  
                                                }
                                          }>
          Sign Up
        </button>
      )
    }
    return(
      <button className="navbar-signup" onClick={() => {this.props.updatenewuser(false);
                                               this.props.resetForm();
                                              }
                                        }>
        Log In
      </button>
    )
    
  }

  navbarMakeJob = () => {
    
  }

  render() {

    return(
      <div>
        <nav className="navbar  navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="images/hardhat-worker.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            Job Finder
          </a>
          {this.navbarSignupOrLoginButton()}
        </nav>
      </div>
    )
  }


}