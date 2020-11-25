import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contacts from "./Contacts";
import "react-router-dom"
import NewPage from './NewPage';




class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data})
    })
    .catch(console.log)
  }

render() {
  return (
    <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new_page">New Page</Link>
            </li>
          </ul>
  
          <hr />
          
          <Switch>
            <Route 
            exact 
            path="/" 
            render={() => <Contacts contacts={this.state.contacts}/>}>
    
            </Route>
            <Route 
            path="/new_page" 
            component={NewPage}/>

          </Switch>
        </div>
      </Router>
  );
}
  
}

export default App;
