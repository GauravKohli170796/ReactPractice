import './App.css';
import Parent from "./Components/Refs/Parent";
import NormalComponent from "./Components/HighOrderComponents/NormalComponent";
import UpdateLifeCycleMethods from "./Components/LifeCycleMetods/UpdateLifeCycleMethods";
import Counter from "./Components/RenderProps/Counter";
import ClickCounter from "./Components/RenderProps/ClickCounter";
import HoverCounter from "./Components/RenderProps/HoverCounter";
import {UserProvider} from "./Components/Context/ContextFile";
import FirstLevel from "./Components/Context/FirstLevel";
import Effect from "./Components/Hooks/Effect";
import Context from "./Components/Hooks/Context";
import SimpleReducer from "./Components/Hooks/SimpleReducer";
import ReducerwithContextParent from "./Components/Hooks/Reducer/ReducerwithContextParent";
import Memo from "./Components/Hooks/Memo";
import CallbackParent from "./Components/Hooks/Callback/CallbackParent";
import React,{useState} from 'react'



function App() {
  const [IsDisplay,setIsDisplay]=useState(true);
  return (
    <div className="App">

      {/* <UserProvider value={JSON.stringify({Name:"Sachin",SurName:"Bhatt"})}>
       <FirstLevel></FirstLevel>
      </UserProvider> */}


    {/* Below is implentation of render props
    <Counter renderProps={(Counter,incrementCounter)=><ClickCounter Counter={Counter} incrementCounter={incrementCounter}></ClickCounter>} ></Counter>
    <Counter renderProps={(Counter,incrementCounter)=><HoverCounter Counter={Counter} incrementCounter={incrementCounter}></HoverCounter>} ></Counter> */}


      {/* <Parent /> */}
      {/* <UpdateLifeCycleMethods name="xyz" counter={0}/> */}
      {/* <NormalComponent name="Original props" /> */}


      {/* {IsDisplay && <Effect/>}
      <div> 
       <button onClick={()=>{setIsDisplay(!IsDisplay)}}>Toggle Display</button>
      </div> */}


       {/* <UserProvider value={JSON.stringify({Name:"Sachin",SurName:"Bhatt"})}>
       <Context></Context>
      </UserProvider>  */}

      {/* <SimpleReducer/> */}

      {/* <ReducerwithContextParent/> */}
      {/* <Memo/> */}
      <CallbackParent/>


    </div>
  );
}

export default App;
