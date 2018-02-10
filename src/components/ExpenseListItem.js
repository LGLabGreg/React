import React from 'react';
import { Link } from 'react-router-dom';

const ExpanseListItem =  (
  {id, description, amount, createdAt}
) => (
  <li>
    <h3>Description: {description}</h3>
    <p>Amount: {amount}</p>
    <p>Created: {createdAt}</p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </li>
);

export default ExpanseListItem;