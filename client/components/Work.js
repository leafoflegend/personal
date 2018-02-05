import React from 'react'
import Expand from './Expand'

import '~/public/assets/styles/work.css'

export default () => <div className='main-project-div'>
  <a href='/assets/Eleni-Arvanitis-Resume.pdf' target='_blank'>
    <button className='resume-button'>View Resume</button>
  </a>
  <Expand/>
</div>