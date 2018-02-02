import React from 'react'
import { NavLink } from 'react-router-dom'
import '~/public/assets/styles/home.css'

// TODO: Make this a text carousel
const blurb = ''
    , me = [
      'a software engineer',
      'imaginative',
      'a teaching fellow',
      'a gamer',
      'a Ravenclaw',
      ''
    ]

export default () => {
  return <div className='text-carousel'>
    I am
        {
          me.map((descriptor, i) => {
            return <span className='content' key={i}>
                {descriptor}
            </span>
          })
        }
    <p>{blurb}</p>
    <NavLink to='/contact'>
      <button>Say hi</button>
    </NavLink>
  </div>
}