import firebase from 'firebase';

// Initialize firebase with config obj directly placed
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