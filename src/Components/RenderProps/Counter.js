import React, { Component } from 'react'

/*
Render props is also a techniques to share a comman functionality between components.
We share it by passing props as a function value.
*/

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Counter:0
        }

        this.incrementCounter=this.incrementCounter.bind(this);
    }

    incrementCounter()
    {

        this.setState({
            Counter:this.state.Counter+1
        })
        // this.setState((prevState)=>{
        //     return {
        //       Counter:prevState.Counter  
        //     }
        // })
    }
    
    render() {
        return (
            <>
              {this.props.renderProps(this.state.Counter,this.incrementCounter)}  
            </>
        )
    }
}

export default Counter;