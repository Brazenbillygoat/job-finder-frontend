import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class NavBar extends Component {

  dipsplayBids = () => {
    if (localStorage.getItem("isGovernment") == "false") {
      return <li><a href="/bids">My Bids</a></li>
    }
  }

  navbarSignupOrLoginButton = () => {
    if (localStorage.getItem("token")) {
      return (
        <li className="glyphicon glyphicon-out log-out"
         onClick={() => {
            localStorage.clear(); 
            this.props.updateIsGovernment(null)
          }}>
          LogOut
        </li>
      )
    }
    else if (!this.props.newUser) {
      return (
        <li className="glyphicon glyphicon-user log-out"
         onClick={() => {
            this.props.updatenewuser(true);
            this.props.resetForm();  
          }}>
          SignUp
        </li>
      )
    }

    return(
      <li className="glyphicon glyphicon-log-in log-out" 
          onClick={() => {
            this.props.updatenewuser(false);
            this.props.resetForm();
          }}>
        LogIn
      </li>
    )
    
  }

  navbarMakeJob = () => {
    if (localStorage.getItem("token") && localStorage.getItem("isGovernment") == "true") {
      return <li><a href="/jobs/new">Create a Job</a></li>
    }
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
              <li className="active">
                <img src="images/hardhat-worker.png"
                   width="30" 
                   height="30" 
                   className="d-inline-block align-top" 
                   alt="silouette of a worker" 
                   loading="lazy" 
                />
              </li>
              <li><a href="/jobs">Jobs Table</a></li>
              {this.navbarMakeJob()}
              {this.dipsplayBids()}
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