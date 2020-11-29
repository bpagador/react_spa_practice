import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Fetch from './components/Fetch';
import NavBar from './components/NavBar';

export default class App extends Component {

  render() {
    return (
    <div >
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route 
          exact
          path="/"
          component={Home}/>
          <Router 
          exact
          path="/fetch"
          component={Fetch}/>
        </Switch>

      </Router>
    </div>
    
    )
  }
  
  ;
}

