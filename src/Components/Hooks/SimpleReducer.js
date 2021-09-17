import React,{useReducer} from 'react';

const initialState={count:0};

function reducer(state,action)
{
    switch(action.type)
    {
        case 'Increment':
        return {...state,count:state.count+1};
        case 'Decrement':
        return {...state,count:state.count-1};
        case 'Increment 5':
        return {...state,count:state.count+5};
        case 'Decrement 5':
        return {...state,count:state.count-5};
        default:
        return state;
    }
}



function Reducer() {
    const[Count,dispatch]=useReducer(reducer,initialState)

    return (
        <>
           Count : {Count.count} 
           <button onClick={()=>{dispatch({type:"Increment"})}}>Increment Count</button>
           <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement Count</button>
           <button onClick={()=>{dispatch({type:"Increment 5"})}}>Increment Count by 5</button>
           <button onClick={()=>{dispatch({type:"Decrement 5"})}}>Decrement Count by 5</button>
        </>
    )
}

export default Reducer;
