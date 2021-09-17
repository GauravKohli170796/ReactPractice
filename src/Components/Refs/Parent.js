import React from 'react';
import Child from "./Child";
import ChildCls from "./ChildCls";

function Parent() {
    const ChildRef=React.createRef();
    const ChildClsRef=React.createRef();
    console.log("****************************Parent Ref**************************************");
    return (
        <>
       <Child ref={ChildRef}></Child>
       <ChildCls ref={ChildClsRef}></ChildCls>
       <button onClick={()=>{ClickHandler()}}>Notification</button>
            
        </>
    )


    function ClickHandler()
    {
        console.log("Parent inside ClickHandler");
        ChildClsRef.current.NotificationDisplay("Hello Brother!! to class child Ref");
        ChildRef.current.focus();
        //ChildRef.current.focus();
        //console.log(ChildRef.current);
        //ChildRef.current.NotificationDisplay(" Parent Button Clicked");
    }
}

export default Parent;
