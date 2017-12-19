import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Navbar from '~/client/components/Navbar'
import About from '~/client/components/About'

// import firebase from 'firebase'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/about" component={About}/>
          {/*<Route exact path='/work' component={Work}/>*/}
          {/*<Route exact path='articles' component={Articles}/>*/}
          {/*<Route exact path='/articles/:articleId'*/}
                 {/*component={({match: {params: {screenplayId}}}) =>*/}
                   {/*<Editor title={screenplayId}*/}
                           {/*fireRef={db.ref('screenplays')*/}
                             {/*.child(screenplayId)}/>}*/}
          {/*/>*/}
          {/*<Route exact path="/contact" component={Contact}/>*/}
        </Switch>
      </div>
    </Router>
  }
}
