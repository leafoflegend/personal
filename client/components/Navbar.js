import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '~/public/assets/styles/index.css'

const logo = '/assets/img/ea-logo-cream.png';

export default class Navbar extends Component {
  render() {
    return <nav className="nav-bar">
      <NavLink to='/'>
        <img className="logo" src={logo} alt="ea-logo"/>
      </NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/work'>Work</NavLink>
      <NavLink to='/articles'>Articles</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  }
}