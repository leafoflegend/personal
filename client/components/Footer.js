import React from 'react';

import { socialLinks } from "~/secrets"
import '~/public/assets/styles/footer.css'

export default () => {
    return <div className='footer'>
      <span className='copyright'>&copy;2018 Eleni Arvanitis</span>
      <div className='social'>
        {
          socialLinks.map(link => {
            return <div className='icons' key={link[0]}>
              <a href={link[0]} target='_blank'>{link[1]}</a>
            </div>
          })
        }
      </div>
    </div>
}