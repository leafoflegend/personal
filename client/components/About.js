import React from 'react'
import { NavLink } from 'react-router-dom'
// Im a bit confused about the below import, but maybe im not seeing something in your build steps
import { aboutHeader, aboutText1, aboutText2 } from '~/content/about'
import '~/public/assets/styles/about.css'

export default () => {
  return <div className='about'>
    <p className='about-header'>{aboutHeader}</p>
    <p className='about-text'>{aboutText1}</p>
    <p className='about-text'>{aboutText2}</p>
    <NavLink exact to='/work'>
      <button>See my work</button>
    </NavLink>
  </div>
}
