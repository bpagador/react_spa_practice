import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewPage from '../NewPage'
import Contacts from '../Contacts';

export default function RouterJS() {

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
    )
}