import React from 'react';
import '~/public/assets/styles/articles.css'

// TODO: Store articles in firebase db to access links (button), titles (top, right from photo), date created, description

const links = [
  [
    '"Alexa, Can You Hear Me?"',
    '19 November 2017',
    'In this article, I touch upon the Machine Learning model for personal assistants like Alexa, their pre-programmed abilities, and the impact of how we increasingly rely on our machines as friends.',
    'https://medium.com/@datgreekchick/alexa-can-you-hear-me-cf43e820534c',
  ],
  [
    'Stop Killing Animals for the Gram',
    '18 January 2018',
    'A quick plea: If you\'re visiting Africa, avoid companies that offer the experience to pet or walk exotic animals. Those companies breed or trap them for profit - including that of selling them to be easily killed upon "release."',
    'https://medium.com/@datgreekchick/stop-killing-animals-for-the-gram-257014f3de83',
  ],
];

export default () => {
  return <div className='all-articles'>
    {
      links.map(article => {
        return <div key={article[0]} className='article'>
          <h3 className='article-title'>{article[0]}</h3>
          <div>
            <p className='date-posted'>{article[1]}</p>
            <p className='description'>{article[2]}</p><br/>
            <a href={article[3]} target='_blank'>
              <button>Read More ↗</button>
            </a>
            <hr/>
          </div>
        </div>
      })
    }
  </div>
}