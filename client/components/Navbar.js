import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '~/public/assets/styles/index.css'

const logo = '';

export default class Navbar extends Component {
  render() {
    return <nav className="nav-bar">
      <NavLink to='/'>
        <h3>Logo</h3>
        {/*<img className="logo" src={logo} alt="ea-logo"/>*/}
      </NavLink>
      <NavLink to='/about'><h3>About</h3></NavLink>
      <NavLink to='/work'><h3>Work</h3></NavLink>
      <NavLink to='/articles'><h3>Articles</h3></NavLink>
      <NavLink to='/contact'><h3>Contact</h3></NavLink>
    </nav>
  }
}