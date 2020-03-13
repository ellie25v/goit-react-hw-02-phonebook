import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Phonebook extends Component {
    state = { 
        name: "",
        number: ""
     }

     handleChangeValue = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
     

      handleSubmitForm = event => {
        event.preventDefault();
        this.setState({
            name: "",
            number: ""
        });
        this.props.onGetValue({
            id: uuidv4(),
            name: this.state.name,
            number: this.state.number});
       
      }


    render() {
        return (
            
            <form onSubmit={this.handleSubmitForm}>
                <span>Name: </span>
                <input onChange={this.handleChangeValue}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
                required/>
                <br/>

                <span>Number: </span>
                <input onChange={this.handleChangeValue}
                type="tel" 
                value={this.state.number} 
                name="number" 
                placeholder="Number"
                required/>
                <br/>

                <button type="submit">Add Contact</button>
            </form>
            
        );
    }
}

export default Phonebook;