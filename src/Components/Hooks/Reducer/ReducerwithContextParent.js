import React,{useReducer,useContext} from 'react';
import {CounterContextProvider} from "../../Context/ContextFile";
import ReducerwithContextChild1 from "./ReducerwithContextChild1";
import ReducerwithContextChild2 from "./ReducerwithContextChild2";

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


function ReducerwithContextParent() {
    const [Count, dispatch] = useReducer(reducer, initialState)

    return (
        <div >
        <CounterContextProvider value={Count}>
           <ReducerwithContextChild1 updateMethod={dispatch}>
           </ReducerwithContextChild1> 

           <ReducerwithContextChild2 updateMethod={dispatch}>
           </ReducerwithContextChild2>
        </CounterContextProvider>
        </div>
    )
}

export default ReducerwithContextParent
