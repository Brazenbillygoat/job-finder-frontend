import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoginContainer from '../containers/LoginContainer'
import editForm from './EditForm'


//Example api need to use our api here 
const URL = 'https://jsonplaceholder.typicode.com/users'


//Need to refactor when we get our api
const Table = () => {
    
    const [employees, setEmployees] = useState([])
    const [isShown, setShown] = useState(false)
    
    useEffect(() => {
        getData()
    }, [])
    
    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    //Need to refactor when we get our api
    const renderHeader = () => {
        let headerElement = ['id', 'Job', 'Price', 'Deadline', 'Awarded Company', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id, name, email, phone }) => {
            return (
                <tr key={id}>
                    {/* add create job, either here or navbar */}
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>Name of Company</td>
                    <td className='opration'>
                        {/* add buttons here for edit */}
                        <button className='button' onClick={() => removeData(id)}>Delete</button>                        
                        <button className='button' onClick={() => setShown(true)}>Edit</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>Jobs</h1>
            <table id='jobs'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


export default Table