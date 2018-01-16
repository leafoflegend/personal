import React from 'react'
import '~/public/assets/styles/work.css'

// TODO: Fix text color on button hover (link within button)

const projectNames = [
  'coquill',
  'by land or sea',
  "'what is my purpose?'",
  'witcher school of code',
  'martinsville deli',
  'npm library',
  'game'
]

export default () => {
  return <div>
    {
      projectNames.map(project => {
        return <div className='projects'>
          <span className='line'>
            {project.toUpperCase()}
          </span>
        </div>
      })
    }
    <button>
      <a className='button-link'
         href="/assets/Eleni-Arvanitis-Resume.pdf"
         target="_blank">
        Download Resume
      </a>
    </button>
  </div>
}