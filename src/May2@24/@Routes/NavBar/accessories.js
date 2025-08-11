import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Accessories = () => {
  // const [data,setData] = useState({
  //   name:""
  // })
 
  // const navigate = useNavigate()

  // const handleName=(event)=>{
  //   setData({...data,
  //     name:event.target.value})
  // }
  
  // const handlebutton=(event)=>{
  //   event.preventDefault();
  //   navigate('/',{
  //     state:{name:data?.name}})
  // }
 
  return (
    <center>
      <h1>ACCESSORIES</h1>
      {/* <form onSubmit={handlebutton}>

      <input 
      type='text'
      id='name'
      placeholder='Enter text'
      onChange={handleName}/>
      <button>S</button>
      </form> */}
    </center>
  )
}

export default Accessories