import React,{useCallback,useReducer,useState} from 'react';
import CallbackChild1 from "./CallbackChild1";
import CallbackChild2 from "./CallbackChild2";
const initialState={count:0};

function reducer(state,action)
{
    switch(action.type)
    {
        case "Increment":
        return {...state,count:state.count+1};

        case "Reset":
        return initialState;  
        
        default:
        return state;    
    }
}

function CallbackParent() {
    const [Counter1, dispatch1] = useReducer(reducer, initialState);
    const [Counter2, dispatch2] = useReducer(reducer, initialState);
    const [Count1, setCount1] = useState(0);
    const [Count2, setCount2] = useState(0);

    const IncrementStateCounter11= useCallback(()=>IncrementStateCounter1(),[Count1]);
    const IncrementStateCounter22=useCallback(()=>IncrementStateCounter2(),[Count2]);


    function IncrementStateCounter1()
    {
        setCount1(preState=>preState+1);
    }

    function IncrementStateCounter2()
    {
        setCount2(preState=>preState+1);
    }

    return (
        <div>
          <CallbackChild1 counterValue={Counter1.count} Incrementhandler={dispatch1} counterValueState={Count1} IncrementhandlerState={IncrementStateCounter11}></CallbackChild1>
          <CallbackChild2 counterValue={Counter2.count} Incrementhandler={dispatch2} counterValueState={Count2} IncrementhandlerState={IncrementStateCounter22}></CallbackChild2>
        </div>
    )
}

export default CallbackParent;
