import React from 'react';
import { NavLink } from 'react-router-dom';
import '~/public/assets/styles/index.css'

const logo = '/assets/img/ea-logo-cream.png';

const Navbar = () => {
  return <nav className="nav-bar">
    <NavLink to='/'>
      <img className="logo" src={logo} alt="ea-logo-cream"/>
    </NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/work'>Work</NavLink>
    <NavLink to='/articles'>Articles</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
  </nav>
}

export default Navbar