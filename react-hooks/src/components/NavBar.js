import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fetch">Fetch</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
            
            
        </div>
    )
}
