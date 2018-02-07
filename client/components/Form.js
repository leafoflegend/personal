import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { siteKey, secretKey } from '~/content/secrets'

export default class Form extends Component {
  state = { contact: {} }

  handleChange = propertyName => evt => {
    const { contact } = this.state
          , newContact = {
            ...contact,
            [propertyName]: evt.target.value
          }

    console.log(`${propertyName}: ${newContact[propertyName]}`)
    this.setState({ contact: newContact });
  }

  recaptchaChange = val => console.log(`Recaptcha value: ${val}`)

  handleSubmit = evt => evt.preventDefault()

  render() {
    const inputs = [
      { type: 'text', name: 'Name', value: this.state.name },
      { type: 'email', name: 'Email', value: this.state.email }
    ]

    return <div className='contact-form'>
      <form onSubmit={this.handleSubmit}>
        {
          inputs.map(input => <label className='form-label'
                                     key={input.type}>
            <input className='form-input' type={`${input.type}`}
                   name={`${input.name}`} required
                   onChange={this.handleChange(input.name.toLowerCase())}
                   placeholder={input.name} value={input.value}/><br/>
          </label>)
        }
        <label className='form-label'>
          <textarea className='form-input' name='message'
                    placeholder='Message' value={this.state.msg}
                    onChange={this.handleChange('message')}/><br/>
        </label>
        <ReCAPTCHA ref='recaptcha' sitekey={siteKey} theme='dark'
                   onChange={this.recaptchaChange}/>
        <button>Submit</button>
      </form>
    </div>
  }
}