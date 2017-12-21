import React from 'react';
import { NavLink } from 'react-router-dom';
import '~/public/assets/styles/index.css'

const logo = '/assets/img/ea-logo-cream.png';

const Navbar = () => {
  return <nav className="nav-bar">
    <NavLink to='/'>
      <img className="logo" src={logo} alt="ea-logo-cream"/>
    </NavLink>
    <NavLink to='/about' className='underline'>About</NavLink>
    <NavLink to='/work' className='underline'>Work</NavLink>
    <NavLink to='/articles' className='underline'>Articles</NavLink>
    <NavLink to='/contact' className='underline'>Contact</NavLink>
  </nav>
}

export default Navbar