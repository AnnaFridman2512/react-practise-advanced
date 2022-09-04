import React, {useMemo, useState, useEffect} from 'react';


export default function UseMemoHook(){
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => setData(data));
    },[]);

    //Only rerender this func when "data" changes - line 28
    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for (let i = 0; i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        return longestName;
    }

    const getLongestname = useMemo(() => findLongestName(data), [data])

    

    return (
        <>
            <div>{getLongestname}</div>
            <button onClick={()=>{
                setToggle(!toggle)
            }}
            >
            {" "}
            toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </>
    )
}