import React, { Component } from 'react';

class TestTable extends Component {

    render() {
        const renderHeader = () => {
            let headerElement = ['id', 'Job', 'Price', 'Deadline', 'Awarded Company', 'operation']
    
            return headerElement.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

        const renderBody = (arr) => {
            return arr.map(el => {
                return (
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>{el.deadline}</td>
                        <td>{el.company_id}</td>
                        <td className='opration'>
                            {/* add buttons here for edit */}
                            <button className='button' onClick={(e) => {this.props.deletejob(e, el.id)}}>Delete</button> 
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
                        {renderBody(this.props.iterable)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TestTable;
