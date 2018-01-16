import React from 'react';
import { NavLink } from 'react-router-dom';
import '~/public/assets/styles/navbar.css'

const logo = '/assets/img/ea-logo-cream.png';

// TODO: Remove home constant color selection

export default () => {
  return <nav className="nav-bar">
    <NavLink to='/'>
      <img className="logo" src={logo} alt="ea-logo-cream"/>
    </NavLink>
    {/*<NavLink to='/' className='underline'>Home</NavLink>*/}
    <NavLink to='/about' className='underline'>About</NavLink>
    <NavLink to='/work' className='underline'>Work</NavLink>
    <NavLink to='/articles' className='underline'>Articles</NavLink>
    <NavLink to='/contact' className='underline'>Contact</NavLink>
  </nav>
}