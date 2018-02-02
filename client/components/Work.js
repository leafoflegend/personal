import React from 'react'
import '~/public/assets/styles/work.css'

const projects = [
  'coquill',
  'by land or sea',
  "'what is my purpose?'",
  'witcher school of code',
  'martinsville deli',
  'npm library',
  'game'
]

export default () => {
  return <div className='main-project-div'>
    <a className='button-link'
       href='/assets/Eleni-Arvanitis-Resume.pdf'
       target='_blank'>
      <button className='resume-button'>View Resume</button>
    </a>
    {
      projects.map(project => {
        return <div key={project} className='projects'>
          <span className='line'>
            {project.toUpperCase()}
          </span>
        </div>
      })
    }
  </div>
}