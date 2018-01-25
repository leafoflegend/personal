import React, { Component } from 'react';
import '~/public/assets/styles/contact.css'

// TODO: Fix validation

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
                 type='text'
                 name='name'
                 placeholder='* Name'
                 required/><br/>
          <input className='form-input'
                 type='email'
                 name='email'
                 placeholder='* Email'
                 required/><br/>
          <textarea className='form-input'
                    name='message'
                    placeholder='* Message'
                    required/><br/>
          <button type='submit'>Submit</button>
        </label>
      </div>
    </div>
  }
}