import { EntypoTwitter, EntypoMail, EntypoGithub, EntypoMedium } from 'react-entypo'

// my information
const socialLinks = [
  ['github.com/datgreekchick', <EntypoGithub/>],
  ['medium.com/@datgreekchick', <EntypoMedium/>],
  ['twitter.com/datgreekchick', <EntypoTwitter/>],
  ['mailto:eleni.arvanitis@me.com', <EntypoMail/>]
];

// recaptcha info
const siteKey = '6LcUVEIUAAAAAGvTqCZPt2Atte6N10QutFhZoBT1'
    , secretKey = '6LcUVEIUAAAAAENk5u3gmajPE00ON0eqSdj2MaLU'

export { siteKey, secretKey, socialLinks }