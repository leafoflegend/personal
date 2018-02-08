import React from 'react'
import Form from './Form'
import {
  EntypoTwitter, EntypoLinkedinWithCircle, EntypoMail
} from 'react-entypo'

import '~/public/assets/styles/contact.css'

export default () => <div className='contact'>
  <h2>Let's Chat!</h2>
  <Form/>
  <div className='other-methods'>
    <p>Forms not your style? Reach out to me here:</p>
    <a href='https://www.linkedin.com/in/eleniarvanitis'>
      <EntypoLinkedinWithCircle/>
    </a>
    <a href='https://www.twitter.com/datgreekchick'>
      <EntypoTwitter/>
    </a>
    <a href='mailto:eleni.arvanitis@me.com'>
      <EntypoMail/>
    </a>
  </div>
</div>