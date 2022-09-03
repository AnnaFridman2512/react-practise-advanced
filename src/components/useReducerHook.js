import React, { useReducer, useState } from 'react';

export default function UseReducerHook() {

   /* const [count, setCount] = useState(0);
    const [showText, setShowtext] = useState(true);*/

 /*3*/   const reducer = (state, action) => { //"state" gives access to all states, "action" is what we'll do with the states
            switch (action.type) {
                case "INCREMENT":
                    return {count: state.count + 1, showText: state.showText} //what i want to happen at each state ehrn i change it
            
                case "toggleShowText":
                    return {count: state.count + 1, showText: !state.showText}
                default:
                    return state            
    
                }
            }                

 /*2*/   const [state, dispatch] = useReducer(reducer,//"state" holds all the states ("count" and "showText"), "dispatch" is going to change the values of the states
                                                      //"reducer" is a function that manages what happens to the states 
        {count: 0, showText: true}                    //set initial values for the states (just like in useState)                                   
    )
 /*1*/   return (
        <>
            <h1>{state.count}</h1>

            <button
 /*6*/              onClick={() => {
                    /*setCount(count + 1);
                    setShowtext(!showText);*/
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "toggleShowText"});
                }}
            >
                Click me
            </button>

            {state.showText && <p>This is text</p>}

        </>
    )
};