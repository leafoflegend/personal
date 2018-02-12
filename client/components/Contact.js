import React from 'react'
import Form from './Form'

import '~/public/assets/styles/contact.css'

export default () => {
  window.scroll(0,0)

  return <div className='contact'>
    <div className='contact-form'>
      <h2>Let's Chat!</h2>
      <Form/>
    </div>
    <div className='other-methods'>
      <p>Forms not your style? Reach out to me here:</p>
    </div>
  </div>
}