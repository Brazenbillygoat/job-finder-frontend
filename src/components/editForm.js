import React, { Component } from 'react';


export default class EditForm extends Component {

  render() {

    const { name, price, deadline, updateJobName, updateJobPrice, updateJobDeadline } = this.props

    return(

      <div>
        <form>
          
          <h2 className="new-job-header">Edit {name}</h2>
          <label>
            <h4>Asking Price:</h4>
            <input className="job-input"
                   type="number"
                   step="0.01"
                   value={price}
                   onChange={(e) => updateJobPrice(e.target.value)}
            />
          </label>
          <label>
            <h4>Job Name:</h4>
            <input className="job-input"
                   type="datetime-local"
                   value={deadline}
                   onChange={(e) => updateJobDeadline(e.target.value)}
            />
          </label>

        </form>
      </div>
    )
  }
}