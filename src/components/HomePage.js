import React, { Component } from 'react';
import TestTable from './TestTable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import NewJobForm from './NewJobForm';
import EditForm from './EditForm';
let baseUrl = 'http://localhost:3000';

class HomePage extends Component {

    
    state = {
        viewJobs: false
    }

    // getAllJobs = () => {
    //     debugger
    //     fetch("http//:localhost3000/jobs")
    //     .then(resp => resp.json())
    //     .then(jobs => {
    //         debugger
    //         this.props.updateAllJobs(jobs)
    //         console.log(jobs)
    //     })
    // }

    // componentDidMount() {
    //     // this.getAllJobs()
        
    //     fetch("http://localhost3000/jobs")
    //     .then(resp => resp.json())
    //     .then(jobs => {
    //         debugger
    //         this.props.updateAllJobs(jobs)
    //         console.log(jobs)
    //     })
    // }

    createNewJob = async (e) => {
        e.preventDefault();
        
        const newJobInfo = { method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: e.currentTarget.elements[0].value,
                price: e.currentTarget.elements[1].value,
                deadline: e.currentTarget.elements[2].value
                
            })
        }
        
        const res = await fetch(`${baseUrl}/jobs/new`, newJobInfo)
        const newJob = await res.json()
        console.log(newJob)

    }
    
    updateViewJobs = () => {
        this.setState({ viewJobs: true})
    }
    
    exitJobsTable = () => {
        this.setState({ viewJobs: false})
    }
    
    
    render() {
        const { name, price, deadline, allJobs, updateJobName, updateJobPrice, updateJobDeadline, updateAllJobs } = this.props
        // this.getAllJobs()
        return (
            <Router>
                
               <div>
                    {this.state.viewJobs ? <div><TestTable /><button className="btn btn-danger btn-block btn-lg" onClick={this.exitJobsTable}>Exit</button></div> 
                    : <button  className="btn btn-primary btn-lg pull-left" onClick={this.updateViewJobs}>Jobs</button>}
                    {/* <button>Create Job</button> */}
                </div>
                <Switch>
                    <Route path="/jobs/new" render={() => {
                        return(
                            <NewJobForm name={name}
                                        price={price}
                                        deadline={deadline}
                                        updateJobName={updateJobName}
                                        updateJobPrice={updateJobPrice}
                                        updateJobDeadline={updateJobDeadline}
                                        createNewJob={this.createNewJob}
                            />
                        )}
                    }/>
              
                    <Route path="/jobs/edit" render={() => {
                        return(
                            <EditForm name={name}
                                        price={price}
                                        deadline={deadline}
                                        updateJobName={updateJobName}
                                        updateJobPrice={updateJobPrice}
                                        updateJobDeadline={updateJobDeadline}
                            />
                        )}
                    }/>
                    {/* <Route path="/bids" render{() => {
                        return(

                        )}
                    }/> */}
                </Switch>
            </Router>
        );
    }
}

export default HomePage;
