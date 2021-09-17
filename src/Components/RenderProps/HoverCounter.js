import React from 'react'

function HoverCounter(props) {

    const {Counter,incrementCounter}=props;
    return (
        <div>
        <button onClick={incrementCounter}>Cilck two {Counter} times</button>   
        </div>
    )
}

export default HoverCounter;