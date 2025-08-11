import React, { useState } from 'react'

const Byusestate = () => {
    const [count,setCount] = useState(0);

    const HandleIncrement =()=>{
        setCount(count+1)
    }
    const HandleIntial =()=>{
        setCount(0)
    }
    const HandleDecrement =()=>{
        if(count>0)
        setCount(count-1)
    }

  return (
    <div>
      <center>
        <h1>useState</h1><br/>
         <h3>Count : {count}</h3> 
         <button onClick={HandleIncrement}>+1</button>
         <button onClick={HandleIntial}>0</button>
         <button onClick={HandleDecrement}>-1</button>
      </center>
    </div>
  )
}

export default Byusestate