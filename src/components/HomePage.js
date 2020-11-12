import React, { Component } from 'react';
import TestTable from './TestTable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import EditForm from './editForm';
import LandPage from './LandPage'
import NewJobForm from './NewJobForm';
let baseUrl = 'http://localhost:3000';

class HomePage extends Component {
    state = {
        viewJobs: false
    }
    
    updateViewJobs = () => {
        this.setState({ viewJobs: true})
    }
    
    exitJobsTable = () => {
        this.setState({ viewJobs: false})
    }
    
    
    render() {
        const { allJobs, 
                deleteJob, 
                allBids, 
                createNewJob, 
                updateJob,
                jobName,
                updateJobName,
                jobPrice,
                updateJobPrice,
                jobDeadline,
                updateJobDeadline
              } = this.props;
        return (
            <Router>   
                <Switch>
                    <Route exact path="/" render={() => {
                       return(
                            <LandPage />
                       )
                    }}/>

                    <Route exact path="/jobs" render={() => {
                        return(
                            <TestTable 
                                iterable={allJobs}
                                allBids={allBids}
                                deleteJob={deleteJob}
                            />

                        )}
                    }/>
                    <Route exact path="/jobs/new" render={() => {
                        return(
                            <NewJobForm createNewJob={createNewJob} />
                        )}
                    }/>
              
                    <Route path="/jobs/edit/:id" render={() => {
                        return(
                            <EditForm 
                                updateJob={updateJob} 
                                jobName = {jobName}
                                updateJobName = {updateJobName}
                                jobPrice = {jobPrice}
                                updateJobPrice = {updateJobPrice}
                                jobDeadline = {jobDeadline}
                                updateJobDeadline = {updateJobDeadline}
                            />
                        )}
                    }/>
                    <Route exact path="/bids" render={() => {
                        return(
                            <TestTable 
                                iterable={allBids}
                                allJobs={allJobs}
                            />
                        )
                    }}/>
                </Switch>
            </Router>
        );
    }
}

export default HomePage;
