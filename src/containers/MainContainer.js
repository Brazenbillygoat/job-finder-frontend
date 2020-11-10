import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'

class MainContainer extends Component {

    state = {
        name: "",
        price: 0,
        deadline: 0
    }

    updateJobName = (name) => {
        this.setState({ name })
    }

    updateJobPrice = (price) => {
        this.setState({ price })
    }

    updateJobDeadline = (deadline) => {
        this.setState({ deadline })
    }
    
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <HomePage name={this.state.name}
                            price={this.state.price}
                            deadline={this.state.deadline}
                            updateJobName={this.updateJobName}
                            updateJobPrice={this.updateJobPrice}
                            updateJobDeadline={this.updateJobDeadline}
                    />
                </div>

            </div>
        );
    }
}

export default MainContainer;
