import React, { Component } from 'react';

class editForm extends Component {
    render() {
        return (
            <form id= "add-app">

                <label>Name: </label>
                <input type="text"> </input>

                <label> Email: </label>
                <input type="text" ></input>

                <label>Phone: </label>
                <input type="text"></input>

                <button>Create</button>
            </form>
        );
    }
}

export default editForm;
