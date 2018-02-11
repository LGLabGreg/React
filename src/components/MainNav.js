import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const MainNav = ({ startLogout }) => (
  <header>
    <h1>Expansify</h1>
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/create">Create</NavLink>
      </li>
      <li className="nav-item">
        <button
          className="nav-link btn"
          type="button"
          onClick={startLogout}>Logout</button>
      </li>
    </ul>
  </header>
);
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})
export default connect(null, mapDispatchToProps)(MainNav);