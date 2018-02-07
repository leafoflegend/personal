import React, { Component } from 'react'
import '~/public/assets/styles/expand.css'
import projects from '~/content/projects'

export default class Expand extends Component {
  state = { isHidden: true, selectedElem: '' }

  toggle = (evt) => this.setState({
    isHidden: !this.state.isHidden,
    selectedElem: evt.target.innerText
  })

  render() {
    const { isHidden, selectedElem } = this.state;

    return projects.map(project => {
      return <div key={project.name} className='project'>
        <span className='line' onClick={this.toggle}>
            {project.name.toUpperCase()}
        </span>
        { !isHidden && selectedElem === project.name.toUpperCase() &&
        <div className='detail'>
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