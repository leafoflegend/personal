import React from 'react'
import '~/public/assets/styles/work.css'
import projects from '~/content/projects'

export default () => {
  window.scrollTo(0, 0)

  return <div className='main-project-div'>
    <a href='/assets/Eleni-Arvanitis-Resume.pdf'
       target='_blank'>
      <button className='resume-button'>View Resume</button>
    </a>
    {
      projects.map(project => {
        return <div key={project[0]} className='projects'>
          <span className='line'>{project[0].toUpperCase()}</span>
        </div>
      })
    }
  </div>
}