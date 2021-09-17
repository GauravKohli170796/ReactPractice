import React from 'react';

function CallbackChild2({counterValue,Incrementhandler,IncrementhandlerState,counterValueState}) {
    console.log("Rendering CallbackChild2");
    return (
        <div>
            {counterValue}
            <button onClick={()=>{Incrementhandler({type:"Increment"})}}>Increment Counter 2</button>

            {counterValueState}
            <button onClick={()=>{IncrementhandlerState(counterValueState+1)}}>Increment State Counter 2</button>
        </div>
    )
}

export default React.memo(CallbackChild2);
