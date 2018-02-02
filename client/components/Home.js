import React from 'react'
import { NavLink } from 'react-router-dom'

import '~/public/assets/styles/home.css'
import recs from '../recs'

const me = [
  'a software engineer',
  'imaginative',
  'a teaching fellow',
  'inquisitive',
  'a gamer',
  'innovative',
  'a Ravenclaw',
  'intuitive',
]

export default () => {
  return <div className='me'>
    <div className='text-carousel'>
      I am
        {
          me.map((descriptor, i) => {
            return <span className='carousel-items' key={i}>
                {descriptor}
            </span>
          })
        }
      <NavLink to='/contact'>
        <button>Say hi</button>
      </NavLink>
    </div>
    <div className='rec'>
      {
        recs.map((rec, i) => <div key={i}>
          <p className='rec-content'>"{rec[0]}"</p>
          <p className='rec-name'>{rec[1]}</p>
        </div>)
      }
    </div>
  </div>
}