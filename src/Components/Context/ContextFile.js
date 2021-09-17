import React from 'react'

const UserContext=React.createContext();
const UserProvider=UserContext.Provider;
const UserConsumer=UserContext.Consumer;

const CounterContext=React.createContext();
const CounterContextProvider=CounterContext.Provider;

export{
    UserProvider,
    UserConsumer,
    UserContext,
    CounterContext,
    CounterContextProvider

}