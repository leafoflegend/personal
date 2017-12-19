const aboutHeader = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      aboutText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum quam sit amet dictum suscipit. Ut sed vestibulum odio. Aenean lorem justo, lacinia et ipsum eu, interdum fringilla eros. Curabitur in sapien rutrum, tempor erat vitae, viverra lectus. Pellentesque ultricies imperdiet augue, sit amet faucibus augue faucibus eget. Nulla facilisi. Maecenas suscipit justo eget magna semper, ut dignissim mi sodales. In et cursus quam.',
      aboutText2 = 'Maecenas ut consectetur augue. Phasellus non scelerisque sapien, in pharetra eros. Donec a risus vitae tellus finibus volutpat a non tellus. Phasellus semper augue arcu, id volutpat purus tempor venenatis. Nullam ultrices, lacus eu commodo volutpat, odio tortor gravida ante, sed pulvinar odio massa id lectus. Suspendisse ac ligula mauris. Suspendisse felis nulla, lobortis luctus pretium scelerisque, euismod id velit.',
      photo = ''

import React from 'react';
import '~/public/assets/styles/about.css'

const About = () => {
  return <div className='about'>
    <h2 className='about-header'>{aboutHeader}</h2>
    <p className='about-text'>{aboutText1}</p>
    <p className='about-text'>{aboutText2}</p>
    <img className='about-photo'
         src='/public/assets/img/me.jpg'
         alt='my photo'
    />
  </div>
}

export default About