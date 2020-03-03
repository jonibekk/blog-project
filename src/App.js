import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import Hero from './components/Hero'
import Home from './containers/Home'
import ContactUS from './containers/ContactUS'
import Post from './containers/Post'

import styles from './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <Hero />
        <Switch>
          <Route path='/contact-us' component={ContactUS} />
          <Route path='/post' component={Post} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
