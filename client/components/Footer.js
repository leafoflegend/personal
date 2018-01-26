import React from 'react';
import { EntypoTwitter, EntypoMail, EntypoGithub, EntypoMedium } from 'react-entypo'

export default () => {
    return <div className='footer'>
      <span>&copy;2018 Eleni Arvanitis</span>
      <span><EntypoGithub/></span>
      <span><EntypoTwitter/></span>
      <span><EntypoMedium/></span>
      <span><EntypoMail/></span>
    </div>
}