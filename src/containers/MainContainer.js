import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
const baseUrl = 'http://localhost:3000';

class MainContainer extends Component {

    state = {
        name: "",
        price: 0,
        deadline: 0,
        allJobs: [],
        allBids: []
    }

    async componentDidMount(){
        let headers = {headers: {"Authentication": `Bearer ${localStorage.getItem("token")}`}}
        const res = await fetch(`${baseUrl}/bids`, headers)
        const allBids = await res.json()
        console.log(allBids)
        // this.setState({ allBids })
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

    updateAllJobs = (allJobs) => {
        this.setState({allJobs})
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
                            allJobs={this.state.allJobs}
                            allBids={this.state.allBids}
                            updateJobName={this.updateJobName}
                            updateJobPrice={this.updateJobPrice}
                            updateJobDeadline={this.updateJobDeadline}
                            updateAllJobs={this.updateAllJobs}
                    />
                </div>

            </div>
        );
    }
}

export default MainContainer;
