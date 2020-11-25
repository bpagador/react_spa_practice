import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Router>
            <Switch>
                <div>
                    <h1>this is the navbar </h1>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>        
                            </li>

                            <li>
                                <Link to="/list">List</Link>
                            </li>

                        </ul>
                </div>
            </Switch>
        
        </Router>
        
    )
}
