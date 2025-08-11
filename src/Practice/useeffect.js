
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Byuseeffect = () => {
    const [count,setCount] =useState(0);


useEffect(()=>{console.log(count)},[count]);


const HandleIncrement =()=>{
    setCount(count+1)
}
const HandleIntial =()=>{
    setCount(0)
}
const HandleDecrement =()=>{
    if(count>0)
    setCount(count-1)
};

  return (
    <div>
        <center>
            <h1>useEffect</h1> <br/>
           <h3>Count : {count}</h3> 
           <button onClick={HandleIncrement}>+1</button>
           <button onClick={HandleIntial}>0</button>
           <button onClick={HandleDecrement}>-1</button>
        </center>
    </div>
  )
}

export default Byuseeffect;