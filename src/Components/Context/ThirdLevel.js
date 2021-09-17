import React,{useState} from 'react';
import {UserConsumer} from "../Context/ContextFile";

function ThirdLevel() {
    const[ContextJson,setContextJson]=useState({});
    
    return (
        <>
        <UserConsumer>
        {
            (value)=>{
               return <h5>Hello {JSON.parse(value).Name} {JSON.parse(value).SurName}</h5>
                
            }
        }

        </UserConsumer>
        </>
    )
}

export default ThirdLevel;