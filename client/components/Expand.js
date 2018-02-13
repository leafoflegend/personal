import React, { Component } from 'react'
import '~/public/assets/styles/expand.css'
import db from '~/content/fire'

export default class Expand extends Component {
  state = { projects: [], isHidden: true, selectedElem: '' }

  componentDidMount() {
    db.ref('projects')
      .on('child_added', snap => {
        const techStack = []
        for (const techUsed in snap.val().technologies) {
          techStack.push(techUsed)
        }

        this.setState({
          projects: [...this.state.projects, {
              name: snap.val().name,
              role: snap.val().role,
              description: snap.val().description,
              technologies: techStack,
              links: [ snap.val().links ]
           }]
        })
      })
  }

  toggle = (evt) => this.setState({
    isHidden: !this.state.isHidden,
    selectedElem: evt.target.innerText
  })

  render() {
    const { projects, isHidden, selectedElem } = this.state;

    return projects.map(project => {
      return <div key={project.name} className='project'>
        <span className='line' onClick={this.toggle}>
            {project.name.toUpperCase()}
        </span>
        { !isHidden && selectedElem === project.name.toUpperCase()
          ? <div className='detail'>
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
              Object.values(project.links[0]).map((link, i) => {
                return <a key={`${project.name}-link${i}`}
                          href={link} target='_blank'>
                  <button className='project-links'>
                    {
                      link.includes('github')
                        ? 'code'
                        : link.includes('youtube')
                          ? 'youtube' : 'demo'
                    }
                  </button>
                </a>
              })
            }
          </div>
          : null
        }
      </div>
    })
  }
}