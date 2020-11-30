import React from 'react'
import  { useState, useEffect } from 'react'


function usePosts() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])

    return posts; 
}

export default function Fetch() {
    const posts = usePosts()


    return (
  
        <div> 
            <h2>Hi</h2>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}
