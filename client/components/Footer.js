import React from 'react';

import { socialLinks } from "~/content/secrets"
import '~/public/assets/styles/footer.css'

export default () => {
    return <div className='footer'>
      <span className='copyright'>&copy; 2018 Eleni Arvanitis</span>
      <div>
        {
          socialLinks.map(link => <a key={link[0]} className='icons'
                                     href={link[0]} rel='noopener'>
              {link[1]}
            </a>)
        }
      </div>
    </div>
}