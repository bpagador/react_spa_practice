import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewPage from '../NewPage'
import App from '../App'

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
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/new_page">
              <NewPage />
            </Route>

          </Switch>
        </div>
      </Router>
    )
}