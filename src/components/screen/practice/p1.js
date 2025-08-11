import React, { useState } from 'react'

const Pract01= () => {
const [count,setCount]=useState(0);
const handleCount=()=>{
setCount(count+1)
}
const handledecrease=()=>{
    if(count > 0)
    setCount(count-1)
    }
const handleRest=()=>{
    setCount(0)
}

  return (
      <> 
      <button onClick={handleCount}>Clicked {count} Times</button><br></br>
      <Mybutton pass={count} onClick={handleCount}/><br></br>
      <button onClick={handledecrease}>dec</button><br></br>
      <button onClick={handleRest}>Reset</button><br></br>
  </>
  )
}

export default Pract01
const Mybutton=({pass,onClick})=>{
    return(
        <button onClick={onClick}>Clicked {pass} Times</button>
    )
}