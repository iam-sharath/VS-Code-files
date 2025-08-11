import React, { useState } from 'react'

const Byonchange = () => {
    const[name,setName]= useState('');

    const handleName =(e)=>{
             setName(e.target.value)
    }

  return (
    <div>
        <center>
            <h2>onChange Event Handler</h2> <br/>
                <input type='text' onChange={handleName} placeholder='Enter Your Name'
                value={name} name='name'/>
                 <br/>
                <h3>{name}</h3>

        </center>
    </div>
  )
}

export default Byonchange