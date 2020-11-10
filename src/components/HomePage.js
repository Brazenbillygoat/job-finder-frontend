import React, { Component } from 'react';
import TestTable from './TestTable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewJobForm from './NewJobForm';

class HomePage extends Component {

    
    state = {
        viewJobs: true
    }
    
    
    showJobsTable = () => {
        this.setState({ viewJobs: true})
    }
    
    exitJobsTable = () => {
        this.setState({ viewJobs: false})
    }
    
    
    render() {
        const { name, price, deadline, updateJobName, updateJobPrice, updateJobDeadline } = this.props
        return (
            <Router>
               <div>
                    {this.state.viewJobs ? <div><TestTable /><button onClick={this.exitJobsTable}>Exit</button></div> 
                    : <button onClick={this.showJobsTable}>Jobs</button>}
                    <button>Create Job</button>
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
                            />
                        )}
                    }/>
                </Switch>
            </Router>
        );
    }
}

export default HomePage;
