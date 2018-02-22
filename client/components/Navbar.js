import React from 'react'
import { NavLink } from 'react-router-dom'

import '~/public/assets/styles/navbar.css'

const logo = '/assets/img/ea-logo-cream.png'
    , nav = ['about', 'work', 'articles', 'contact']

export default () => <nav role='navigation' className="nav-bar">
  <NavLink to='/'>
    <img className="logo" src={logo} alt="ea-logo-cream"/>
  </NavLink>
  {
    nav.map(link => {
      return <NavLink key={link} to={`/${link}`} className='underline'>
        {`${link[0].toUpperCase()}${link.slice(1)}`}
      </NavLink>
    })
  }
</nav>