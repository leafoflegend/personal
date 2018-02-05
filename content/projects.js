const projects = [
  {
    name: 'coquill',
    role: `Engineer`,
    description: `An in-browser real-time collaborative text editor for screenplays. I helped my team structure our firebase database using immutable Maps with Facebook's immutable.js, spearheaded our site's sentiment analysis for future release, and helped with the frontend design. We released a MVP within a week, with a more in-depth version within two.`,
    technologies: [
      'firebase',
      'immutable.js',
      'react', 'redux', 'react-redux',
      'sentiment analysis',
    ],
    links: [
      'https://coquill-e559a.firebaseapp.com/',
      'https://github.com/queenplay-associates/coquill',
    ],
  },
  {
    name: 'by land or sea',
    role: 'Solo Engineer',
    description: `So you want to go on vacation but don't know where you want to go? Ask "By Land or Sea," a smart voice-enabled app for all voice assistants made with the Google Assistant's SDK. Have a conversation with the assistant, and when you're done, she'll give you three options from which to choose. Book your vacation with the sound of your voice or a quick response to the chat-bot. Happy travels!`,
    technologies: [
      'dialogflow',
      'actions on google',
      'google assistant sdk',
      'stripe',
    ],
    links: ['https://github.com/datgreekchick/travel'],
  },
  {
    name: "'what is my purpose?'",
    role: 'Solo Engineer',
    description: `In one day, I created a robot inspired by the butter bot in "Rick and Morty." I used a kit to build the robot with parts and hooked the bot up to an Arduino. For speak purposes, I utilized Alexa Skills Kit to create a lambda function that would model the robot's responses after those in the show's episode (S1 E09). In the future, I will implement the ClarifAI API so that the robot will be able to use its camera to learn whether or not there is a human in front of it. If so, the butter bot will automatically engage in conversation, namely wondering what its purpose is in the world.`,
    technologies: [
      'arduino',
      'alexa sdk',
      'lambda functions',
      'alexa skills kit',
      'clarifAI API',
    ],
    links: [
      'https://www.youtube.com/watch?v=0mvH3GBVqtw',
      'https://github.com/DatGreekChick/purpose',
    ]
  },
  {
    name: 'witcher school of code',
    role: 'Solo Engineer',
    description: `A place where witchers no longer need to make coin by killing monsters. I built my own SQL database with inspiration from "The Witcher 3: The Wild Hunt" using Sequelize.js. `,
    technologies: [
      'react', 'redux', 'react-redux',
      'sequelize',
      'axios',
      'express',
    ],
    links: ['https://github.com/datgreekchick/witcher'],
  },
  {
    name: 'martinsville deli',
    role: 'Solo Engineer',
    description: `I took a pre-existing one-page website and turned it into an e-commerce platform worthy of the company's customers. Previously, the code was only placed in the one html file, but this, like all other projects of mine, focuses on best practices and clean, modular code. An app will also launch in the App Store for accessibility and ease of use.`,
    technologies: [
      'stripe',
      'firebase',
      'react', 'redux', 'react-redux',
    ],
    links: [
      'https://martinsvilledeli.com',
      'https://github.com/datgreekchick/MD-Website',
    ],
  },
  {
    name: 'chrome extension',
    role: 'Engineer',
    description: ``,
    technologies: [
      '',
    ],
    links: [
      ''
    ],
  },
  {
    name: 'game',
    role: 'Engineer',
    description: ``,
    technologies: [
      '',
    ],
    links: [
      ''
    ],
  },
]

export default projects