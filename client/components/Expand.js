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
    return projects.map(project => {
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
            project.links.map((link, i) => {
              return <a key={`${project.name}${i}-link`}
                        href={link} target='_blank'>
                <button className='button-links'>
                  {
                    project.links.length === 1
                      ? 'code'
                      : i === 0 ? 'demo' : 'code'
                  }
                </button>
              </a>
            })
          }
        </div>}
      </div>
    })
  }
}