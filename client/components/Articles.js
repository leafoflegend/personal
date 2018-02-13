import React, { Component } from 'react'

import '~/public/assets/styles/articles.css'
import { db } from '~/content/projects'

export default class Articles extends Component {
  state = { articles: [] }

  componentDidMount() {
    db.ref('articles')
      .orderByChild('date-posted')
      .on('child_added', snap => this.setState({
        articles: [...this.state.articles, snap.val()]
      }))
  }

  render() {
    const { articles } = this.state

    return <div className='all-articles'>
      {
        articles.map(article => <div key={article.title}
                                     className='article'>
          <h3 className='article-title'>{article.title}</h3>
          <p className='date-posted'>{article['date-posted']}</p>
          <p className='description'>{article.description}</p><br/>
          <a href={article.link} target='_blank'>
            <button>Read More ↗</button>
          </a>
          <hr/>
        </div>)
      }
    </div>
  }
}