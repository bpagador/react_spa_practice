import React, { useState } from 'react'

export default function Button() {

    const [buttonText, setButtonText] = useState("Click me, captain!")

    return (
        <div>
            <button onClick={() => setButtonText("Ya clicked me!")}>
                {buttonText}
            </button>
        </div>
    )
}

// if I wanted my button to display new/prev text every time I would have to first create a handleClickEvent function and determine what setCount will do

//then I'd change the inline logic in the button tag to accommodate handleClickEvent as an attribute 
