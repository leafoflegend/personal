import React from 'react'
import Form from './Form'

import '~/public/assets/styles/contact.css'
import '~/public/assets/styles/arrows.css'

export default () => {
  window.scroll(0,0)

  return <div className='contact'>
    <div className='contact-form'>
      <h2>Let's Chat!</h2>
      <Form/>
    </div>
    <div className='other-methods'>
      <span>Forms not your style?</span><br/>
      <span>Contact me here:</span>
      <div className='arrows'>
      </div>
    </div>
  </div>
}