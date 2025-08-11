import axios from 'axios';
import React, { useState } from 'react'
const Signup = () => {
    const [user,setUser] = useState({
        username :'',
        email : '',
        password : '',
        confirmpassword : ''
    })

    const {username,email,password,confirmpassword} = user ;

    const handleOnchange =e =>{
        setUser({...user,[e.target.name] : e.target.value})
    }

    const handleOnsubmit = e=>{
        e.preventDefault();
        axios.post('https://srbmeta-default-rtdb.firebaseio.com/usersdata.json',user)
    .then(()=>alert("Submitted Successfully"))
    }

    const formstyle ={
        border :"2px solid ",
        padding: "5px",

    }
    const styling = {
        borderRadius: "10px",
        padding: "5px",
        marginTop: "10px",
    }

  return (
    <div> 
        <center>
            <form className='signup' autoComplete='off' onSubmit={handleOnsubmit} style={formstyle}>

                <input type='username' name='username' onChange={handleOnchange}  placeholder='Enter username' style={styling}/> <br/>
                <input type='email' name='email' onChange={handleOnchange}  placeholder='Enter email' style={styling}/> <br/>

                <input type='password' name='password' onChange={handleOnchange}  placeholder='Create password' style={styling}/> <br/>

                <input type='consfirmpassword' name='confirmpassword' onChange={handleOnchange}  placeholder='Confirm password' style={styling}/> <br/>
                {password !== confirmpassword ? <p style={{color : "red"}}>Password and Confirm Password does not match</p>:null}

                <input type='submit' name='submit' style={styling}/>
            </form>
        </center>
    </div>
  )
}

export default Signup;