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
                    <TestTable allJobs={this.props.allJobs}
                                deleteJob={this.props.deleteJob}/>
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
