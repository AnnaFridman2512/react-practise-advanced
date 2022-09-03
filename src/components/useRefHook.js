import React, { useRef } from 'react';

export default function UseRefHook(){

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    const logInput = () => console.log(inputRef.current.value);
    const focuseOn = () => {
        inputRef2.current.focus();
        inputRef2.current.value = "";
    }

    return (
        <>
            <h1>useRefHook</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={logInput}>Change me</button> 

            <input type="text" placeholder="Ex..." ref={inputRef2} />
            <button onClick={focuseOn}>Focuse on me</button>
        </>
    );
}
