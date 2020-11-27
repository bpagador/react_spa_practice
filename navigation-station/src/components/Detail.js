import React from 'react'
import  { Link } from 'react-router-dom'

export default function Detail() {
    return (
        <div>
            This is the detail page
            <br></br>
            <Link to="/list">
                <button>List Page</button>
            </Link>
            
        </div>
    )
}
