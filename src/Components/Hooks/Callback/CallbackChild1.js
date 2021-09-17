import React from 'react';

function CallbackChild1({counterValue,Incrementhandler,IncrementhandlerState,counterValueState}) {
    console.log("Rendering CallbackChild1");
    return (
        <div>
            {counterValue}
            <button onClick={()=>{Incrementhandler({type:"Increment"})}}>Increment Counter 1</button>

            {counterValueState}
            <button onClick={()=>{IncrementhandlerState(counterValueState+1)}}>Increment State Counter 1</button>
        </div>
    )
}

export default React.memo(CallbackChild1);
