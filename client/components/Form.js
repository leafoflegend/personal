import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { siteKey, secretKey, action } from '~/content/secrets'
import request from 'request'

export default class Form extends Component {
  state = { name: '', email: '', message: '' }

  handleChange = propertyName => evt => {
    console.log(`${propertyName}: ${this.state[propertyName]}`)

    this.setState({
      ...this.state,
      [propertyName]: evt.target.value
    })
  }

  reCAPTCHAChange = res => {
    request({
      uri: 'https://www.google.com/recaptcha/api/siteverify',
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'https://eleniarvanitis.com',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      },
      data: {
        secret: secretKey,
        response: res
      }
    },
    (err, res, body) => {
      if (err) console.error(err)
      else console.log(`request body: ${body}`)
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.setState({ name: '',  email: '', message: '' })
  }

  render() {
    const { name, email, message } = this.state
          , inputs = [
            { type: 'text', name: 'Name', value: name },
            { type: 'email', name: 'Email', value: email },
          ]

    return <form id='gform' onSubmit={this.handleSubmit}
                 action={action} method="POST">
      {
        inputs.map(input => <label className='form-label' key={input.type}>
          <input className='form-input' type={input.type}
                 name={input.name} required
                 onChange={this.handleChange(input.name.toLowerCase())}
                 placeholder={input.name} value={input.value}/><br/>
        </label>)
      }
      <label className='form-label'>
        <textarea className='form-input' name='message'
                  placeholder='Message' value={message}
                  onChange={this.handleChange('message')}/><br/>
      </label>
      <ReCAPTCHA ref='recaptcha' sitekey={siteKey} theme='dark'
                 onChange={this.reCAPTCHAChange}/>
      <button type='submit'>Submit</button>
    </form>
  }
}