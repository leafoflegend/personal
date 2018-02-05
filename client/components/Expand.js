import React, { Component } from 'react'
import '~/public/assets/styles/expand.css'
import projects from '~/content/projects'

export default class Expand extends Component {
  constructor() {
    super();
    this.state = { isHidden: true }
  }

  toggle() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  render() {
    return (
      projects.map(project => {
        return <div key={project.name} className='project'>
          <span className='line' onClick={this.toggle.bind(this)}>
              {project.name.toUpperCase()}
          </span>
          { !this.state.isHidden && <div className='detail'>
              <p className='role'>{project.role}</p>
              <p className='description'>{project.description}</p>
              <br/><br/>
              {
                project.technologies.map(technology => {
                  return <span className='tech' key={technology}>
                    {technology.toUpperCase()}
                  </span>
                })
              }
              <br/><br/>
              {
                project.links.length > 1
                  ? project.links.map((link, i) => {
                    return <a key={`${project.name}-link${i}`}
                              href={link} target='_blank'>
                      <button className='button-links'>
                        {i === 0 ? 'demo' : 'code'}
                      </button>
                    </a>
                  })
                  : <a key={`${project.name}-link`} target='_blank'
                       href={project.links[0]}>
                    <button className='button-links'>code</button>
                  </a>
              }
             </div>
          }
        </div>
      })
    )
  }
}