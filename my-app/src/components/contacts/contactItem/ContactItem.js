import React from 'react'

const ContactItem = ({ contact: { name, number, id }, deleteContact }) => (

    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={deleteContact} type="button" id={id}>
        Delete contact
      </button>
    </li>
  
)
export default ContactItem;