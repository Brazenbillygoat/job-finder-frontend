import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'

class MainContainer extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <HomePage />
            </div>
        );
    }
}

export default MainContainer;
