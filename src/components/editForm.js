import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditForm(props) { 
  const job = useParams();
  const [name, setName] = useState(0);
  const [price, setPrice] = useState(1);
  const [deadline, setDeadline] = useState(2);

  return(
    <div>
      <h2 className="new-job-header">Edit Job</h2>
      <div className="form-group">
        <label>
          <h4>Job Name:</h4>
          <input className="job-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          <h4>Deadline:</h4>
          <input className="job-input"
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
      </div>
      <button className="btn btn-primary" 
              onClick={() => {props.updateJob(parseInt(job.id), name, price, deadline)}}>Edit Job</button> 
    </div>
  )
}
// export default class EditForm extends Component {
//   state = {
//     name: '',
//     price: '',
//     deadline: ''
//   }

//   render() {
//     const { updateJob } = this.props

//     return(
//       <div>
//         <h2 className="new-job-header">Edit Job</h2>
//         <div className="form-group">
//           <label>
//             <h4>Job Name:</h4>
//             <input className="job-input"
//                   type="text"
//                   value={this.state.name}
//                   onChange={(e) => this.setState({name: e.target.value})}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             <h4>Asking Price:</h4>
//             <input className="job-input"
//                   type="number"
//                   step="0.01"
//                   value={this.state.price}
//                   onChange={(e) => this.setState({price: e.target.value})}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             <h4>Deadline:</h4>
//             <input className="job-input"
//                   type="datetime-local"
//                   value={this.state.deadline}
//                   onChange={(e) => this.setState({deadline: e.target.value})}
//             />
//           </label>
//         </div>
//         <button className="btn btn-primary" onClick={() => updateJob(this.state)}>Edit Job</button>
//       </div>
//     )
//   }
// }