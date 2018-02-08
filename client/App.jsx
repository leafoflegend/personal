import React, { Component } from 'react';
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

// import firebase from 'firebase'

export default class App extends Component {
  state = { contacts: [] }

  // addContact = ({ name, email, msg }) => {
    // axios.post('/api/contacts', { name, email, msg })
    //   .then(res => res.data)
    //   .then(contactInfo => {
    //     this.setState({ contacts: [...this.state.contacts, contactInfo] })
    //   });
  // }

  // componentDidMount() {
  //   axios.get('/api/contacts')
  //     .then(res => res.data)
  //     .then(contacts => this.setState({ contacts }));
  // }

  render() {
    return <Router>
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
  }
}
