import React,{useContext} from 'react';
import {UserContext} from "../Context/ContextFile";

function Context() {
    const UserContextValue=useContext(UserContext);
    let UserContextJson=JSON.parse(UserContextValue);

    return (
        <div>
          Name - {UserContextJson.Name} Surname - {UserContextJson.SurName}
        </div>
    )
}

export default Context;
