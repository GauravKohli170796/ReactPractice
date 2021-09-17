import React,{useContext} from 'react';
import {CounterContext} from "../../Context/ContextFile";


function ReducerwithContextChild2({updateMethod}) {
    const Counter=useContext(CounterContext);
    return (
        <div>
          Counter 2 : {Counter.count}  
           <button onClick={()=>{updateMethod({type:"Increment"})}}>Increment Count</button>
           <button onClick={()=>{updateMethod({type:"Decrement"})}}>Decrement Count</button>
           <button onClick={()=>{updateMethod({type:"Increment 5"})}}>Increment Count by 5</button>
           <button onClick={()=>{updateMethod({type:"Decrement 5"})}}>Decrement Count by 5</button>
        </div>
    )
}

export default ReducerwithContextChild2;
