import React, {Component} from 'react';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts'
import Filter from './filter/Filter'

class App extends Component {
  state = { 
      contacts: [],
      filter: ''
   }

  getValue = value => {
    console.log(value);
    const isNameTaken = this.state.contacts.some(contact => contact.name.toLowerCase() === value.name.toLowerCase())
    !isNameTaken ? 
    this.setState(prev => ({
      contacts: [value, ...prev.contacts]
    })): alert('This name already exists')
  };

  filter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  componentDidMount(){
    const contacts = (localStorage.getItem('contacts') !== null) ? JSON.parse(localStorage.getItem('contacts')) : [];
    this.setState({contacts})
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  
  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    return (
      <>
      <h2>Phonebook</h2>
      <Phonebook {...this.state} onGetValue={this.getValue}/>
      
      <h2>Contacts</h2>
      {(this.state.contacts.length > 2) && <Filter filter={this.filter} />}
      
      <Contacts contacts={this.getFilteredContacts()}
        deleteContact={this.deleteContact}/>
      </>
    );
  }
}

export default App;