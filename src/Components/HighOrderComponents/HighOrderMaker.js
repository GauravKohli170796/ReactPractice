import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NewHighOrderMaker (WrapperComponent){
return class HighOrderMaker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
        this.stateHandler = this.stateHandler.bind(this);
        this.notificationDisplay = this.notificationDisplay.bind(this);
    }


    stateHandler()
    {
        this.setState({
            counter:this.state.counter+1
        })
    }

    notificationDisplay(strMsg)
    {
        toast(strMsg);
    }
    
    render() {
        return (
          <WrapperComponent counter={this.state.counter} notificationDisplay={this.notificationDisplay} stateHandler={this.stateHandler} {...this.props}></WrapperComponent>
        )
    }
}

};
export default NewHighOrderMaker;


