import React, {useCallback, useState} from 'react';
import Child from './Child.js';


export default function UseCallbackHook(){
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Example");

    //Call this func only when "data changes"
    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);


    
    return (
        <>
            <Child returnComment = {returnComment} />
            <button onClick = {() => {
                setToggle(!toggle);
            }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1> toggle</h1>}
        </>
    )
}