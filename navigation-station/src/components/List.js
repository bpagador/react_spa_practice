import React from 'react'
import { Link } from 'react-router-dom'

export default function List() {
    
    return (
        <div>
            <h2>
            This is the List Page
            <Link to="/">
                <button>Home</button>
            </Link>
            </h2>
            
        </div>
    )
}
