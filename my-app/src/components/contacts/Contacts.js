import React from 'react'
import ContactItem from './contactItem/ContactItem'

const Contacts = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem contact={contact} key={contact.id} deleteContact={deleteContact} />
    ))}
  </ul>
);

export default Contacts;