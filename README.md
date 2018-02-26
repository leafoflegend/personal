# Get started:

```
git clone git@github.com:datgreekchick/personal.git
cd personal
npm install
npm start
```

# Frontend

The frontend starts in [`main.js`](./main.js). The root of the react app
is in [`App.jsx`](client/App.jsx).

# a word about ~

The webpack config aliases `~` to mean "the root of the app". For example,
you can `import firebase from '~/fire'` anywhere in your app, without
worrying about how many `..`s to have in your relative path.

# Firebase

You can import the various Firebase APIs from `~/fire`. For instance:

```js
  import firebase, {auth} from '~/fire'

  const google = firebase.auth.GoogleAuthProvider
  auth.signInWithPopup(google)
```

# Hot loading

Hot module replacement is enabled, and the react-hot-loader plugins are applied.

Your React components will update in place after you save them, without losing
their state.