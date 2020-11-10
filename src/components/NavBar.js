import React, { Component } from 'react';

export default class NavBar extends Component {

  navbarSignupOrLoginButton = () => {
    if (!this.props.newUser) {
      return (
        <li className="glyphicon glyphicon-user" onClick={() => {this.props.updatenewuser(true);
                                                 this.props.resetForm();  
                                                }
                                          }>
          Sign Up
        </li>
      )
    }
    return(
      <li className="glyphicon glyphicon-log-in" onClick={() => {this.props.updatenewuser(false);
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
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Job Finder</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><img src="images/hardhat-worker.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" /></li>
              <li><a href="/jobs/new">Create a Job</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/* <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                {this.navbarSignupOrLoginButton()}
            </ul>
          </div>
        </nav>
          {/* <a className="navbar-brand" href="#">
            <img src="images/hardhat-worker.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            Job Finder
          </a> */}
      </div>
    )
  }


}