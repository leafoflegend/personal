import React from 'react';
import { NavLink } from 'react-router-dom';

import '~/public/assets/styles/articles.css'

// TODO: Store articles in firebase db to access links (NavLink button), titles (top, right from photo), and photos (left), date created (have that automated in firebase?)

export default () => {
  return <div className='all-articles'>
    <div className='article'>
      <h3 className='article-title'>Article Title</h3>
      <p>Description</p>
      <NavLink to='/work'>
        <button>Read More</button>
      </NavLink>
    </div>
  </div>
}