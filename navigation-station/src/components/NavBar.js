import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    
                <div>
                    <h1>this is the navbar </h1>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>        
                            </li>

                            <li>
                                <Link to="/list">List</Link>
                            </li>

                            <li>
                                <Link to="/detail">Detail</Link>
                            </li>

                        </ul>
                </div>
            
        
    )
}
