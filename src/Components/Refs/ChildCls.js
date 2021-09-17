import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ChildCls extends Component {
    constructor(props) {
        super(props)
    
    }


    NotificationDisplay(strmsg)
    {
        toast(strmsg);
    }
    
    render() {
        return (
         <ToastContainer/>
        )
    }
}

export default ChildCls;
