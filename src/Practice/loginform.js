import React, { useState } from 'react'

const Loginform = () => {
 const [user,setUser] =useState({ userID : "", password : ""})

 const {userID,password}=user;

 const handleOnchange =e =>{
    setUser({...user,[e.target.name]: e.target.value })
 }

 const handleOnsubmit =e =>{
    console.log(user);
 }
  return (
    <div>
        <center>
            <form  autoComplete='off' onSubmit={handleOnsubmit} >
                <input type='text' placeholder='Enter Username' value={userID} name='userID'
                onChange={handleOnchange}/><br/>

                <input type='password' placeholder='Enter Password' value={password}
                name='password' onChange={handleOnchange}/><br/>

                <input type='submit' name='submit'/>
            </form>
        </center>

    </div>
  )
}

export default Loginform;