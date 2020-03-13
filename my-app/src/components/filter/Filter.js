import React from 'react'

const Filter = ({filter}) => (
    <>
    <h4>Find contact by name</h4>
    <input onChange={filter}
    type="text"
    name="filter"/>
    </>
);

export default Filter;