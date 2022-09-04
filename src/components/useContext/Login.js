import React, {useContext} from "react";
import { AppContext } from './useContextHook.js';



export default function Login (){
    const {setUsername} = useContext(AppContext);


    return (
        <>
            <input
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
        </>
    )
}