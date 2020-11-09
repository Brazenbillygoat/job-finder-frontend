import React, { Component } from 'react';

// Table without delete 
class Table extends Component {
    state = {
        jobs: [{id:1, name: "Fix Building", price: 1000, deadline: '1/1/2021'},
                {id:2, name: "Fix Highway", price: 2342, deadline: '1/1/2021'},
                {id:3, name: "New Building", price: 34234, deadline: '1/1/2021'},
                {id:4, name: "New School", price: 2010, deadline: '1/1/2021'}
            ]
    }

    renderTableData() {
        return this.state.jobs.map((job, index) => {
           const { id, name, price, deadline } = job //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>${price}</td>
                 <td>{deadline}</td>
              </tr>
           )
        })
     }
     renderTableHeader() {
        let header = Object.keys(this.state.jobs[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    
    render() {
        return (
            <div>
                <table id='jobs'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

