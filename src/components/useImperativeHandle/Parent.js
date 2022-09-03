import React, {useRef} from 'react';
import Button  from './Child.js';

export default function Parent(){

    const buttonRef = useRef(null);
    return (
        <>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button from Parent</button>
            <br/>
            <Button ref={buttonRef}/>
        </>
    )
}