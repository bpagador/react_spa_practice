import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
// import Bonus from './components/Bonus';




export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route 
            exact
            path="/"
            component={Home} 
            />
            <Route 
            exact
            path="/list"
            component={List}
            />
            <Route
            path="/detail"
            exact
            component={Detail} />
            {/* <Route
            path="/bonus"
            exact
            component={Bonus}
            /> */}
          </Switch>
        </Router>
      </div>
    
  )


  }
   ;
}
