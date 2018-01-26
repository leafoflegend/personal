import React from 'react';
import { socialLinks } from "~/secrets"

export default () => {
    return <div className='footer'>
      <span>&copy;2018 Eleni Arvanitis</span>
      {
        socialLinks.map(link => {
          return <span>
              <a href={link[0]}>{link[1]}</a>
            </span>
        })
      }
    </div>
}