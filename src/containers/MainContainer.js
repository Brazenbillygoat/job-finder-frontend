import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import { Redirect } from 'react-router';
const baseUrl = 'http://localhost:3000';

class MainContainer extends Component {

    state = {
        allJobs: [],
        allBids: [],
        jobName: "",
        jobPrice: 0,
        jobDeadline: "9999-12-31T23:59:59"
    }

    updateJobName = (jobName) =>  {
        this.setState({jobName})
    }

    updateJobPrice = (jobPrice) =>  {
        this.setState({jobPrice})
    }

    updateJobDeadline = (jobDeadline) =>  {
        this.setState({jobDeadline})
    }

    getJobs = () => {
        fetch(`${baseUrl}/jobs`)
        .then(r => r.json())
        .then(data => {
            let jobsForUser = data;
            if (this.props.isGovernment == "true") {
                jobsForUser = data.filter((job) => {
                    return job.company_id !== parseInt(localStorage.getItem("id"))
                })
            }
            this.setState({allJobs: jobsForUser})
        })
        .catch((err) => {
            console.log(err)
        })
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
            this.setState({allBids: data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getJobs()
        this.getBids()
    }

    createNewJob = (e) => {
        // debugger
        fetch(`${baseUrl}/jobs`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ 
                name: e.target.elements[0].value,
                price: e.target.elements[1].value,
                deadline: e.target.elements[2].value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })

    }

    updateJob = (e) => {
        e.preventDefault();
        //the line below grabs the id off the end of the url
        let jobId = parseInt(window.location.href.split("/").slice(-1).pop())
        const newJob = {
            name: this.state.jobName,
            price: this.state.jobPrice,
            deadline: this.state.jobDeadline,
        }
        fetch(`${baseUrl}/jobs/${jobId}`, {
            method: 'PATCH',
            headers: { 
                // Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newJob),
        })
        .then((res) => res.json())
        .then((data) => {
            let newJobs = this.getJobs();
            this.setState({allJobs: newJobs});
            <Redirect to="/jobs" />
        })
        .catch((err) => {
            console.log(err)
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
                                jobName = {this.state.jobName}
                                updateJobName = {this.updateJobName}
                                jobPrice = {this.state.jobPrice}
                                updateJobPrice = {this.updateJobPrice}
                                jobDeadline = {this.state.jobDeadline}
                                updateJobDeadline = {this.updateJobDeadline}
                    />
                </div>
            </div>
        );
    }
}

export default MainContainer;
