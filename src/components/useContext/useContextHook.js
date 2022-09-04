import React, {useState, createContext} from 'react';
import Login from './Login.js';
import User from './User.js';

export const AppContext = createContext(null);

export default function UseContextHook(){
    const [username, setUsername] = useState("");

    return (
        <>
        <AppContext.Provider value={{username, setUsername}}>  
            <Login  /> <User />
        </AppContext.Provider>
        </>
    )
}