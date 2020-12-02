import React, { useState, useEffect } from 'react'



export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count', count)
    }, [count]) // if the dependency changes, the component essentially gets called again

    const incrementCount = () => {
        setCount((count) => count + 1);
    }

    const decrementCount = () => {
        setCount((count) => count - 1)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>Up!</button>
            <button onClick={decrementCount}>Down!</button>
        </div>
    )
}
