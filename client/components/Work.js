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