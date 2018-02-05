import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'

import { siteKey, secretKey } from '~/content/secrets'
import '~/public/assets/styles/contact.css'

// TODO: Fix validation
// TODO: Send res to Google recaptcha with secretKey

export default class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className='contact'>
      <h2>Let's Chat!</h2>
      <div className='contact-form'>
        <label className='form-label'>
          <input className='form-input'
                 type='text' name='name'
                 placeholder='* Name'
                 required/><br/>
          <input className='form-input'
                 type='email' name='email'
                 placeholder='* Email'
                 required/><br/>
          <textarea className='form-input'
                    name='message'
                    placeholder='* Message'/><br/>
          <ReCAPTCHA ref='recaptcha'
                     sitekey={siteKey} theme='dark'/>
          <button>Submit</button>
        </label>
      </div>
    </div>
  }
}