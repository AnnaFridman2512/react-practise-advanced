import React, {useCallback, useEffect, useState} from 'react';



export default function Child ({returnComment}){
    useEffect(()=>{
        console.log("Func was called");
    }, [returnComment])

    return (
        <>
        
        {returnComment("Anna")}

        </>
    )
}