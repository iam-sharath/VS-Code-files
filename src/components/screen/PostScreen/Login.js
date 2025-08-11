import React,{useState} from 'react' 




const LoginPage =()=>{


    const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 



	const submitThis=(event)=>{
		event.preventDefault();
    alert(`username : ${email}
password : ${passw}`);
	}
    const MainBack={
	backgroundColor:"lightpink",
    padding:"10px",
    display:"flex",
    justifyContent:"center",
    alignContent:"center"}

	const emailstyle={backgroundColor:"lightcyan",
	                  border:"none"}

	
	return(
	<div style={MainBack}>
		<form action="" onSubmit={submitThis}> 
			<div id='login email'> 
				<label >Email</label><br></br>
				<input style={emailstyle}  type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div id='login pass'> 
				<label >Password</label><br></br>
			<input style={emailstyle} type="text"  value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div> <br></br> 
			<button  style={emailstyle} type="submit">Login</button>
		</form>
	</div>
)} 
export default LoginPage;