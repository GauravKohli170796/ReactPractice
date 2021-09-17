import React, { Component } from 'react'
/*
********constructor**********
UpdateLifeCycleMethods.js:17 {name: 'xyz', counter: 0} {counter: 0}
UpdateLifeCycleMethods.js:18 ********getDerivedStateFromProps**********
UpdateLifeCycleMethods.js:59 ********render**********
UpdateLifeCycleMethods.js:44 ********componentDidMount**********
UpdateLifeCycleMethods.js:17 {name: 'xyz', counter: 0} {counter: 1}
UpdateLifeCycleMethods.js:18 ********getDerivedStateFromProps**********
UpdateLifeCycleMethods.js:33 {name: 'xyz', counter: 0} {counter: 1}
UpdateLifeCycleMethods.js:34 ********shouldComponentUpdate**********
UpdateLifeCycleMethods.js:59 ********render**********
UpdateLifeCycleMethods.js:26 {name: 'xyz', counter: 0} {counter: 0}
UpdateLifeCycleMethods.js:27 ********getSnapshotBeforeUpdate**********
UpdateLifeCycleMethods.js:55 ********componentDidUpdate**********
UpdateLifeCycleMethods.js:17 {name: 'xyz', counter: 0} {counter: 2}
UpdateLifeCycleMethods.js:18 ********getDerivedStateFromProps**********
UpdateLifeCycleMethods.js:33 {name: 'xyz', counter: 0} {counter: 2}
UpdateLifeCycleMethods.js:34 ********shouldComponentUpdate**********
UpdateLifeCycleMethods.js:59 ********render**********
UpdateLifeCycleMethods.js:26 {name: 'xyz', counter: 0} {counter: 1}
UpdateLifeCycleMethods.js:27 ********getSnapshotBeforeUpdate**********
UpdateLifeCycleMethods.js:55 ********componentDidUpdate**********
UpdateLifeCycleMethods.js:17 {name: 'xyz', counter: 0} {counter: 3}
UpdateLifeCycleMethods.js:18 ********getDerivedStateFromProps**********
UpdateLifeCycleMethods.js:33 {name: 'xyz', counter: 0} {counter: 3}
UpdateLifeCycleMethods.js:34 ********shouldComponentUpdate**********
UpdateLifeCycleMethods.js:17 {name: 'xyz', counter: 0} {counter: 4}
UpdateLifeCycleMethods.js:18 ********getDerivedStateFromProps**********
UpdateLifeCycleMethods.js:33 {name: 'xyz', counter: 0} {counter: 4}
UpdateLifeCycleMethods.js:34 ********shouldComponentUpdate**********
UpdateLifeCycleMethods.js:17 {name: 'xyz', counter: 0} {counter: 5}

*/

class UpdateLifeCycleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0

             
        }
        console.log("********constructor**********");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state);
        console.log("********getDerivedStateFromProps**********");
        return {
            counter:state.counter
        }

    }
    getSnapshotBeforeUpdate(prepProps,prevState)
    {
        console.log(prepProps,prevState);
        console.log("********getSnapshotBeforeUpdate**********");
        return {
            name:prepProps.name,
            counter:prevState.counter
        };
    }

    shouldComponentUpdate(nextprops,nextState)
    {
        console.log(nextprops,nextState);
        console.log("********shouldComponentUpdate**********");
        if(nextState.counter>2)
        {
            return false;
        }
        return true;
    }

    componentDidMount()
    {
        console.log("********componentDidMount**********");
        setInterval(() => {
            this.setState({
                counter:this.state.counter+1
            })
            
        }, 5000);
    }

    componentDidUpdate(prevProps,prevState,snapShot)
    {
        console.log(prevProps,prevState,snapShot);
        console.log("********componentDidUpdate**********");
    }
    
    render() {
        console.log("********render**********");
        return (
            <div>
             <h5>{this.state.counter}</h5>   
            </div>
        )
    }
}

export default UpdateLifeCycleMethods;
