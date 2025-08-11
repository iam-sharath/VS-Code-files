import React,{useState} from 'react'
import LoginPage from './Login';



const RegisterScreen =()=>{
    // const [name,setName]=useState("");
    // const [number,setnumber]=useState("")
    // const [email,setEmail]=useState("")
    // const [pass,setPass]=useState("")
    const[inputs,setInputs]=useState({})
    
    const handleinput=(event)=>{
        const name = event.target.name;
        const number =event.target.number
        const email =event.target.email
        const pass =event.target.pass
        const value =event.target.value
    setInputs(values=>({...values,
        [name]:value,
      }))
    }
    const handleclick=()=>{
console.log(inputs)
    }
    
    
    return(
        <>
        <form>
            <div > 
				<label >Enter your name</label><br></br>
				<input  type="text"  name='name' value={inputs.name} onChange={handleinput}/> 
			</div>
            <br></br>
            <div > 
				<label >Enter your mobile no.</label><br></br>
				<input  type="text" name='number' value={inputs.number} onChange={handleinput}/> 
			</div>
            <br></br>
            <div > 
				<label >Enter your email</label><br></br>
				<input  type="text" name='email' value={inputs.email} onChange={handleinput}/> 
			</div>
            <br></br>
            <div > 
				<label >Enter your password</label><br></br>
				<input  type="text" name='password' value={inputs.pass} onChange={handleinput}/> 
			</div>
            <br></br>
        </form>
             <button onClick={handleclick}>submit</button>
        </>
    )
}
export default RegisterScreen;