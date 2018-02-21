import React from 'react'
import Form from './Form'
import { callToContact } from '~/content/about'

import '~/public/assets/styles/contact.css'
import '~/public/assets/styles/arrows.css'

export default () => {
  window.scroll(0,0)

  return <div className='contact'>
    <h2>Let's Work Together!</h2>
    <div className='contact-form'>
      <span><Form/></span>
      <div className='contact-footer'>
        { callToContact.map(line => <span>{line}<br/></span>) }
        <div className='arrows'>
        </div>
      </div>
    </div>
  </div>
}