import React from 'react';
import NewHighOrderMaker from "../HighOrderComponents/HighOrderMaker";
import { ToastContainer, toast } from 'react-toastify';

function NormalComponent(props) {
    console.log(props)
    return (
        <div>
           <h1>Normal Components {props.name}</h1> 
           <button onClick={()=>{
               props.notificationDisplay("hello bother!!");
               console.log(props.counter);
               props.stateHandler();
               

           }}>Click Me</button>
           <ToastContainer/>
        </div>
    )
};

export default NewHighOrderMaker(NormalComponent);


