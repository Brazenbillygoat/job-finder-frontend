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

    getJobs = () => {
        fetch(`${baseUrl}/jobs`)
        .then(r => r.json())
        .then(data => this.setState({allJobs: data}))
    }

    async componentDidMount(){
        // let headers = {headers: {"Authentication": `Bearer ${localStorage.getItem("token")}`}}
        // const res = await fetch(`${baseUrl}/bids`, headers)
        // const allBids = await res.json()
        // console.log(allBids)
        // this.setState({ allBids })
        this.getJobs()
    }

    deleteJob = (e, id) => {
        // e.stopPropagation()
        // e.stopPropagation();
        // debugger
        fetch(`${baseUrl}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        }).then(r => r.json())
        .then(data => {
        const newJobs = this.state.allJobs.filter((job) => job.id !== id);
        this.setState({allJobs: newJobs});
        });
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
                            deleteJob={this.deleteJob}
                    />
                </div>

            </div>
        );
    }
}

export default MainContainer;
