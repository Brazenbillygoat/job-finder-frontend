import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
const baseUrl = 'http://localhost:3000';

class MainContainer extends Component {

    state = {
        allJobs: [],
        allBids: []
    }

    getJobs = () => {
        fetch(`${baseUrl}/jobs`)
        .then(r => r.json())
        .then(data => this.setState({allJobs: data}))
    }

    getBids = () => {
        let userInfo = { method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authentication': `Bearer ${localStorage.getItem('token')}`
        } }

        fetch(`${baseUrl}/mybids`, userInfo)
        .then(r => r.json())
        .then(data => {
            this.setState({allBids: data}
        )})
    }

    async componentDidMount(){
        this.getJobs()
        this.getBids()
    }

    createNewJob = async (state) => {
        // ToDo: Fix backend
        console.log(state)       
        fetch(`${baseUrl}/jobs/new`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${localStorage.getItem('token')}`
            },
            body: state      
        }).then(() => {
            this.setState({
                allJobs: [...this.state.allJobs,
                    state
                ]
            })
        })

    }

    updateJob = (id, name, price, deadline) => {
        const oldJob = this.state.allJobs.filter((job) => job.id === id);
        const remainingJobs = this.state.allJobs.filter((job) => job.id !== id)
        const newJob = {
            id: id,
            name: name,
            price: price,
            deadline: deadline,
        }
        console.log(newJob);
        fetch(`${baseUrl}/jobs/${id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${localStorage.getItem('token')}`
            },
            body: newJob,
        }).then(() => {
            this.setState({allJobs: [
                ...remainingJobs,
                newJob,
            ]})
        })

    }

    deleteJob = (id) => {
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
    
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        isGovernment={this.props.isGovernment}
                        updateIsGovernment={this.props.updateIsGovernment}
                    />
                </div>
                <div>
                    <HomePage   allJobs = {this.state.allJobs} 
                                deleteJob = {this.deleteJob}
                                createNewJob = {this.createNewJob}
                                updateJob = {this.updateJob}
                                allBids = {this.state.allBids}
                    />
                </div>
            </div>
        );
    }
}

export default MainContainer;
