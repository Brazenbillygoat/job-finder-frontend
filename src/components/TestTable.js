import React, { Component } from 'react';

class TestTable extends Component {

    render() {
        const renderHeader = () => {
            let headerElement = ['id', 'Job', 'Price', 'Deadline', 'Awarded Company', 'operation']
    
            return headerElement.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

        const renderBody = () => {
            return this.props.allJobs.map(job => {
                return (
                    <tr key={job.id}>
                        <td>{job.id}</td>
                        <td>{job.name}</td>
                        <td>{job.price}</td>
                        <td>{job.deadline}</td>
                        <td>{job.company_id}</td>
                        <td className='opration'>
                            {/* add buttons here for edit */}
                            <button className='button' onClick={(e) => {this.props.deleteJob(e, job.id)}}>Delete</button> 
                            {/* <button className='button' onClick={(e) => {console.log(job.id);}}>Delete</button>  */}

                            <button className='button' onClick={() => console.log("edit clicked")}>Edit</button>
                        </td>
                    </tr>
                )
            })
        }
        return (
            <div>
                <h1 id='title'>Jobs</h1>
                <table id='jobs'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TestTable;
