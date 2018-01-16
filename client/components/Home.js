import React from 'react'
import { NavLink } from 'react-router-dom'
import '~/public/assets/styles/home.css'

// TODO: Make this a text carousel
const blurb = ''
    , me = [
      'a software engineer',
      'imaginative',
      'a teaching fellow',
      '4th descriptor',
      '5th descriptor'
    ]

export default () => {
  return <div className='text-carousel'>
    <span className='description'>
      Eleni Arvanitis is
      <span className='content'>
        {
          me.map((descriptor, i) => {
            return <ul key={i} className='home-ul'>{descriptor}</ul>
          })
        }
      </span>
    </span>
    <p>{blurb}</p>
    <NavLink to='/contact'>
      <button>Say hi</button>
    </NavLink>
  </div>
}