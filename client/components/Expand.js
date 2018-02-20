import React, { Component } from 'react'
import '~/public/assets/styles/expand.css'
import db from '~/content/fire'

export default class Expand extends Component {
  state = { projects: [], isHidden: true, selectedElem: '' }

  componentWillMount() {
    db.ref('work')
      .once('value', snap => {
        for (let i = 0; i < snap.val().length; i++) {
          this.setState({ projects: [...this.state.projects, snap.val()[i]] })
        }
      })
  }

  toggle = evt => this.setState({
    isHidden: !this.state.isHidden,
    selectedElem: evt.target.innerText
  })

  render() {
    const { projects, isHidden, selectedElem } = this.state

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
              project.links.map((link, i) => {
                return <a key={`${project.name}-link${i}`}
                          href={
                            link['code']
                              ? link['code']
                              : link['youtube']
                                ? link['youtube'] : link['demo']
                          } target='_blank'>
                  <button className='project-links'>
                    {
                      link['code']
                        ? 'code'
                        : link['youtube']
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