import React from 'react'
import { Link } from 'react-router-dom'


export default function Bonus() {
    return (
        <div>
            This is the bonus page
            <Link to="/detail">
                <button>Detail Page</button>
            </Link>
        </div>
    )
}
