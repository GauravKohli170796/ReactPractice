import React from 'react'

function ClickCounter(props) {

    const {Counter,incrementCounter}=props;
    return (
        <div>
        <button onClick={incrementCounter}>Clicked {Counter} times</button>   
        </div>
    )
}

export default ClickCounter;
