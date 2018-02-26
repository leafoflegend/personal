import React from 'react'
import Expand from './Expand'
import '~/public/assets/styles/work.css'

export default () => {
  window.scroll(0,0)

  return <div className='work'>
    <a href='/assets/Eleni_Arvanitis_Resume.pdf' target='_blank'>
      <button className='resume-button'>View Resume</button>
    </a>
    <Expand/>
  </div>
}