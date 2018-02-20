import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import '~/public/assets/styles/index.css'
import '~/public/assets/styles/button.css'

import Navbar from '~/client/components/Navbar'
import About from '~/client/components/About'
import Home from '~/client/components/Home'
import Work from '~/client/components/Work'
import Articles from '~/client/components/Articles'
import Contact from '~/client/components/Contact'
import Footer from '~/client/components/Footer'

export default () => <Router>
  <div>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path='/work' component={Work}/>
      <Route exact path='/articles' component={Articles}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    <Footer/>
  </div>
</Router>
