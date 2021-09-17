import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Child=React.forwardRef((props,ref)=>{

    return (
        <>
        <input type="text" placeholder="Child Functional Ref" ref={ref}></input>
         <ToastContainer/>   
        </>
    )

    function NotificationDisplay(strMsg)
    {
        toast(strMsg);
    }
})

export default Child;
