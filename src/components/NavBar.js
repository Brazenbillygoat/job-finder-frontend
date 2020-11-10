import React, { Component } from 'react';

export default class NavBar extends Component {

  navbarSignupOrLoginButton = () => {
    if (!this.props.newUser) {
      return (
        <li class="glyphicon glyphicon-user" onClick={() => {this.props.updatenewuser(true);
                                                 this.props.resetForm();  
                                                }
                                          }>
          Sign Up
        </li>
      )
    }
    return(
      <li class="glyphicon glyphicon-log-in" onClick={() => {this.props.updatenewuser(false);
                                               this.props.resetForm();
                                              }
                                        }>
        Log In
      </li>
    )
    
  }

  navbarMakeJob = () => {
    
  }

  render() {

    return(
      <div>
        <nav className="navbar  navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Job Finder</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><img src="images/hardhat-worker.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" /></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              {/* <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                {this.navbarSignupOrLoginButton()}
            </ul>
          </div>
        </nav>
          {/* <a class="navbar-brand" href="#">
            <img src="images/hardhat-worker.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
            Job Finder
          </a> */}
      </div>
    )
  }


}