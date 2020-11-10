
import React, { Component } from 'react';


export default class NewJobForm extends Component {

  render() {

    const { name, price, deadline, updateJobName, updateJobPrice, updateJobDeadline } = this.props

    return(

      <div>
        <form action="/action_page.php">
          <h2 className="new-job-header">New Job</h2>
          <div className="form-group">
            <label>
              <h4>Job Name:</h4>
              <input className="job-input"
                    type="text"
                    value={name}
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
                    value={price}
                    onChange={(e) => updateJobPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>Deadline:</h4>
              <input className="job-input"
                    type="datetime-local"
                    value={deadline}
                    onChange={(e) => updateJobDeadline(e.target.value)}
              />
            </label>
          </div>

        </form>
      </div>
    )
  }
}

