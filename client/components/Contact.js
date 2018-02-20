import React from 'react'
import Form from './Form'

import '~/public/assets/styles/contact.css'
import '~/public/assets/styles/arrows.css'

export default () => {
  window.scroll(0,0)

  return <div className='contact'>
    <h2>Let's Work Together!</h2>
    <div className='contact-form'>
      <span><Form/></span>
      <span className='contact-footer'>
        <span>Forms not your style?</span><br/>
        <span>Contact me here:</span>
        <div className='arrows'>
        </div>
      </span>
    </div>
  </div>
}