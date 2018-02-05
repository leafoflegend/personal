import React from 'react';

import '~/public/assets/styles/articles.css'
import articles from '~/content/articles'

export default () => <div className='all-articles'>
  {
    articles.map(article => <div key={article[0]} className='article'>
        <h3 className='article-title'>{article[0]}</h3>
        <p className='date-posted'>{article[1]}</p>
        <p className='description'>{article[2]}</p><br/>
        <a href={article[3]} target='_blank'>
          <button>Read More ↗</button>
        </a>
        <hr/>
      </div>)
  }
</div>