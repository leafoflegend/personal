import React from 'react'

import '~/public/assets/styles/work.css'
import '~/public/assets/styles/expand.css'
import projects from '~/content/projects'

export default () => {
  window.scrollTo(0, 0)

  return <div className='main-project-div'>
    <a href='/assets/Eleni-Arvanitis-Resume.pdf' target='_blank'>
      <button className='resume-button'>View Resume</button>
    </a>
    {
      projects.map((project, i) => {
        return <div key={project[0]} className='projects'>
          <span className='line'>{project[0].toUpperCase()}</span>
          <div className='detail'>
            <p className='role'>{project[1].role}</p>
            <p className='project-description'>
              {project[1].description}
            </p><br/><br/>
            {
              project[1].technologies.map(technology => {
                return <span className='tech' key={technology}>
                  {technology.toUpperCase()}
                </span>
              })
            }
            <br/><br/>
            {
              project[1].links.length > 1
                ? project[1].links.map((link, i) => {
                  return <a key={`links-${i}`} href={link}
                            target='_blank'>
                    <button>{ i === 0 ? 'Demo' : 'Code' }</button>
                  </a>
                })
                : <a key={`links-${i}`} target='_blank'
                     href={project[1].links[0]}>
                    <button>Code</button>
                </a>
            }
          </div>
        </div>
      })
    }
  </div>
}