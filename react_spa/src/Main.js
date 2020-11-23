import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link 
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Bonus from "./Bonus";
import Form from "./Form";


 
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/bonus">Bonus Items</a></li>
            <li><a href="/form">Form</a></li>
          </ul>


          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/stuff" component={Stuff}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/bonus" component={Bonus}/>
            <Route exact path="/form" component={Form}/>

          </div>
        </div>

      </Router>
        
    );
  }
}
 
export default Main;