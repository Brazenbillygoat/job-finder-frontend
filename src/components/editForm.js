import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export default class EditForm extends Component { 

  getCurrentJobInfo = async () => {
    let job_id = localStorage.getItem("id")
    let res = fetch(`http://localhost:3000/jobs/${parseInt(job_id)}`)
    let currentJob = (await res).json()
    console.log(currentJob)
  }

  async componentDidMount(){
    let job_id = localStorage.getItem("id")
    let res = await fetch(`http://localhost:3000/jobs/${parseInt(job_id)}`)
    let currentJob = await res.json()
    this.props.updateJobName(currentJob.name)
    this.props.updateJobPrice(currentJob.price)
    this.props.updateJobDeadline(currentJob.deadline)
  }

  render() {
    
    const { 
      updateJob,
      jobName,
      updateJobName,
      jobPrice,
      updateJobPrice,
      jobDeadline,
      updateJobDeadline
    } = this.props;

    
    

    return(
      <form onSubmit={(e) => updateJob(e)}>
        <div>
          <h2 className="new-job-header">Edit Job</h2>
          <div className="form-group">
            <label>
              <h4>Job Name:</h4>
              <input className="job-input"
                    type="text"
                    value={jobName}
                    onChange={(e) => updateJobName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>Asking Price:</h4>
              <input className="job-input"
                    type="number"
                    step="0.01"
                    value={jobPrice}
                    onChange={(e) => updateJobPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>Deadline:</h4>
              <input className="job-input"
                    type="datetime-local"
                    value={jobDeadline}
                    onChange={(e) => updateJobDeadline(e.target.value)}
              />
            </label>
          </div>
          <input className="btn btn-primary" type="submit" value="Edit Job" />
        </div>
      </form>
    )
  }
}
