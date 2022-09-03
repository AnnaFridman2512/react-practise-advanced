import React, {forwardRef, useImperativeHandle, useState} from 'react';


const Button = forwardRef((props, ref) => {//"ref" comes from Parent
    const [toggle, setToggle] = useState(false);


    useImperativeHandle(ref, () =>({
        alterToggle(){
            setToggle(!toggle); 
        }

    }));

    return (
        <>
            <button>Button from Child</button> 
            <br/>
            {toggle && <span>Toggle</span>}
        </>
    );
});


export default Button;