import React from 'react'
import  { useState, useEffect } from 'react'

export default function Fetch() {
    //state
    const [ data, setData ] = useState([]);

    //lifecyle method 
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(console.log)
    }, [])

    return (
        
        <div> 
            <h2>Hi</h2>
            <ul>
                {data.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    )
}
