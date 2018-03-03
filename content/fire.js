import firebase from 'firebase'

// Initialize firebase with config obj directly placed
// Review: I mean lol, we can probably not store this here...
// Depends on what env you're deploying with but lots of solutions for this!
const fire = firebase.initializeApp({
  apiKey: "AIzaSyCSDIJcPHNNOU9aob-hTKJr1Gs2aBfXF6k",
  authDomain: "elenicodes.firebaseapp.com",
  databaseURL: "https://elenicodes.firebaseio.com",
  projectId: "elenicodes",
  storageBucket: "elenicodes.appspot.com",
  messagingSenderId: "928734970131"
})

const db = fire.database()
export default db
