import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'

class MainContainer extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <HomePage />
                </div>
            </div>
        );
    }
}

export default MainContainer;
