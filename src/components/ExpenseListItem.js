import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpanseListItem =  (
  {id, description, amount, createdAt, note}
) => (
  <li>
    <h3>Description: {description}</h3>
    <p>Amount: {amount / 100}</p>
    <p>Created: {moment(createdAt).format('MMM Do, YYYY')}</p>
    <p>Note: {note}</p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </li>
);

export default ExpanseListItem;