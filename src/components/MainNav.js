import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <header>
    <h1>Expansify</h1>
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/create">Create</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/help">Help</NavLink>
      </li>
    </ul>
  </header>
);

export default MainNav;