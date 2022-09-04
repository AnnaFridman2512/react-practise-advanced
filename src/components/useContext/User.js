import React, {useContext} from 'react';
import { AppContext } from './useContextHook.js';



export default function User(){

    const {username} = useContext(AppContext);


    return(
        <>
            <h1>User: {username} </h1>
        </>
    );
}