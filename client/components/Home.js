import React from 'react'
import { NavLink } from 'react-router-dom'
import TextLoop from 'react-text-loop'

import '~/public/assets/styles/home.css'
import { me, description} from '~/content/about'

export default () => <div className='me'>
  <div className='text-carousel'>
    I am
    <TextLoop>
      {
        me.map(descriptor => {
          return <span className='carousel-items'
                       key={descriptor}>
              {descriptor}
          </span>
        })
      }
    </TextLoop>
    <p className='home-description'>{description}</p>
    <NavLink to='/contact'>
      <button>Say hi</button>
    </NavLink>
  </div>
</div>