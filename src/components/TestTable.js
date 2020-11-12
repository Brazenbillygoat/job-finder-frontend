import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TestTable extends Component {




    render() {
        const renderHeader = () => {
            let headerElement = ['id', 'Job', 'Price', 'Deadline', 'Awarded Company', 'operation']
    
            return headerElement.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }
        
        const renderJobNameForBids = (bid) => {
            let jobName;
            this.props.allJobs.find((job) => {
                if (job.id == bid.job_id) {
                    jobName = job.name
                }
                
            })
            return jobName
        }

        const renderAwardedCompanyForJobs = (job) => {
            
            if ( parseInt(localStorage.getItem("id")) === job.company_id ){
                return ""
            }
            
            return job.company_id
            
        }
        const renderTitle = () => {
            if (window.location.href.split("/").slice(-1).pop() == "jobs") {
                return ("Jobs")
            }
            return("Bids")
        }

        const renderBody = (iterable) => {
            if (localStorage.getItem("isGovernment") === "true" ){
            if (window.location.href.split("/").slice(-1).pop() == "jobs") {
                return iterable.map(job => {
                    return (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.name}</td>
                            <td>{job.price}</td>
                            <td>{job.deadline}</td>
                            <td>{renderAwardedCompanyForJobs(job)}</td>
                            <td className='opration'>
                                <button className='button' onClick={() => {this.props.deleteJob(job.id)}}>Delete</button> 
                                <Link className='button' to={`/jobs/edit/${job.id}`}>Edit</Link>
                            </td>
                        </tr>
                    )
                })
            } else {
                return iterable.map(bid => {
                    return (
                        <tr key={bid.id}>
                            <td>{bid.id}</td>
                            <td>{renderJobNameForBids(bid)}</td>
                            {/* <td>{bid.notes}</td> */}
                            <td>{bid.bid_price}</td>
                            <td>{bid.time_to_completion}</td>
                            <td>{bid.company_id}</td>
                            <td className='opration'>
                                {/* <button className='button' onClick={() => {this.props.deleteJob(job.id)}}>Delete</button> 
                                <Link className='button' to={`/jobs/edit/${job.id}`}>Edit</Link> */}
                            </td>
                        </tr>
                    )
                })
            }
        }
        else {
            if (window.location.href.split("/").slice(-1).pop() == "jobs") {
                return iterable.map(job => {
                    return (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.name}</td>
                            <td>{job.price}</td>
                            <td>{job.deadline}</td>
                            <td>{renderAwardedCompanyForJobs(job)}</td>
                            <td className='opration'>
                                {/* <button className='button' onClick={() => {this.props.deleteJob(job.id)}}>Delete</button> 
                                <Link className='button' to={`/jobs/edit/${job.id}`}>Edit</Link> */}
                            </td>
                        </tr>
                    )
                })
            } else {
                return iterable.map(bid => {
                    return (
                        <tr key={bid.id}>
                            <td>{bid.id}</td>
                            <td>{renderJobNameForBids(bid)}</td>
                            {/* <td>{bid.notes}</td> */}
                            <td>{bid.bid_price}</td>
                            <td>{bid.time_to_completion}</td>
                            <td>{bid.company_id}</td>
                            <td className='opration'>
                                {/* <button className='button' onClick={() => {this.props.deleteJob(job.id)}}>Delete</button> 
                                <Link className='button' to={`/jobs/edit/${job.id}`}>Edit</Link> */}
                            </td>
                        </tr>
                    )
                })
            }
        }
        }


        return (
            <div>
                <h1 id='title'>{renderTitle()}</h1>
                <table id='jobs'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody(this.props.iterable)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TestTable;
