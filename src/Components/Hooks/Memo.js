import React,{useMemo,useReducer} from 'react';
let initialState={count:0};

function reducer(state,action)
{
    switch(action.type)
    {
        case "Increment":
            return {...state,count:state.count+1};
        default:
            return state;
    }

}

function Memo() {

const initialState={count:0};
   const[Counter1,dispatch1]=useReducer(reducer,initialState);
   const[Counter2,dispatch2]=useReducer(reducer,initialState);

const CachedIsEven=useMemo(()=>isEven(),[Counter1]);

    
    return (
        <div>
           <div><button onClick={()=>{dispatch1({type:"Increment"})}}>Counter1 Clicked {Counter1.count} times</button></div>
           {CachedIsEven ? "Even" : "Odd"}
           <div><button onClick={()=>{dispatch2({type:"Increment"})}}>Counter2 Clicked {Counter2.count} times</button></div>
            
        </div>
    )




    function isEven()
    {
        console.log("isEven is executed");
        let i=0;
        while(i<2000000000)
        {
            i++;
        }

        return (((Counter1.count)%2===0) ? true:false);
    }
}

export default Memo;
