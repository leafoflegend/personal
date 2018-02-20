const request = require('request')
import { secretKey } from '~/content/secrets'

request.post('https://www.google.com/recaptcha/api/siteverify', {
    form: {
      secret: secretKey,
      response: req.body['g-recaptcha-response']
    },
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'https://eleniarvanitis.com',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
    },
  },
  (err, res, body) => {
    if (err) throw new Error(`Error verifying humanity: ${err}`)
    else console.log(`request body: ${JSON.parse(body)}`)
  })