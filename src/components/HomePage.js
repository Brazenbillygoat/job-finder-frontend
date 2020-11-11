import React, { Component } from 'react';
import TestTable from './TestTable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import EditForm from './EditForm';
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
        const { allJobs, deleteJob, createNewJob, updateJob } = this.props;
        return (
            <Router>
               <div>
                    <TestTable allJobs={allJobs}
                                deleteJob={deleteJob}/>
                </div>
                <Switch>
                    <Route path="/jobs/new" render={() => {
                        return(
                            <NewJobForm createNewJob={createNewJob} />
                        )}
                    }/>
              
                    <Route path="/jobs/edit/:id" render={() => {
                        return(
                            <EditForm updateJob={updateJob} />
                        )}
                    }/>
                </Switch>
            </Router>
        );
    }
}

export default HomePage;
