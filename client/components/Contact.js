import React from 'react';
import '~/public/assets/styles/contact.css'

export default () => {
  return <div className='contact'>
    <h2>Let's Chat!</h2>
    <div className='contact-form'>
      <label className='form-label'>
        <input className='form-input'
               type='text'
               placeholder='Name'/><br/>
        <input className='form-input'
               type='email'
               placeholder='Email'/><br/>
        <textarea className='form-input'
                  placeholder='Message'/><br/>
      </label>
      <button>Submit</button>
    </div>
  </div>
}