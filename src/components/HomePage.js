import React, { Component } from 'react';
import TestTable from './TestTable'

class HomePage extends Component {

    state = {
        viewJobs: false
    }
    
    
    showJobsTable = () => {
        this.setState({ viewJobs: true})
    }

    exitJobsTable = () => {
        this.setState({ viewJobs: false})
    }

    
    render() {
        return (
            <div>
                {this.state.viewJobs ? <div><TestTable /><button onClick={this.exitJobsTable}>Exit</button></div> : <button onClick={this.showJobsTable}>Jobs</button>}
            </div>
        );
    }
}

export default HomePage;
