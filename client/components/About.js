import React from 'react';
import { NavLink } from 'react-router-dom';

import '~/public/assets/styles/about.css'
import '~/public/assets/styles/button.css'

const aboutHeader = 'Creating useful and engaging software'
    , aboutText1 = `I’m a full stack software engineer advanced in JavaScript, Node.js, Express.js, SQL, PostgreSQL, Sequelize, React.js, Redux, React-Redux, and CSS. I also have some experience with SCSS, Python and robotics hardware from independent projects. I thrive in environments that constantly push me to learn and want to learn more programming languages, including C++, Java, Swift, and Go.`
    , aboutText2 = `When I’m not on the job, I love catching a game of soccer, strumming my bass guitar, following the latest fashion trends, or taking photos while traveling.`
    // , photo = ''

export default () => {
  return <div className='about'>
    <p className='about-header'>{aboutHeader}</p>
    <p className='about-text'>{aboutText1}</p>
    <p className='about-text'>{aboutText2}</p>
    <NavLink to='/work'>
      <button>See my work</button>
    </NavLink>
  </div>
}