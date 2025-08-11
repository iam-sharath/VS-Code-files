import React from 'react'
import { useNavigate } from 'react-router';

const Usenagivator = () => {
    let forward = useNavigate();
  return (
    <>
    <div>Using useNagivator</div>
    <button onClick={()=>forward(-1)}></button>
    </>
  )
}

export default Usenagivator;