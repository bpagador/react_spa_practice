import  { useState, useEffect } from 'react'

export default function Fetch() {
    //state
    const [ data, setData ] = useState({});

    //lifecyle method 
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <ul>
                {data.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    )
}
