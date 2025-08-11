import React from 'react'
import { Link } from 'react-router-dom'
import './cal.css'
import Dropdown from 'react-bootstrap/Dropdown';


const Naviagte = () => {
  return (
    <div>
       <center>
    {/* <h2>Hi This is Sharath..!</h2> */}
    </center>
        {/* <Link style={{textDecoration: 'none'}} to="/">Home</Link> */}
        {/* <Link style={{textDecoration: 'none'}} to="/matirialUI">Home</Link> */}
        

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Projects</Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="/">Home</Dropdown.Item> */}
        <Dropdown.Item href="/calculator">Calculator</Dropdown.Item>
        <Dropdown.Item href="/signup">signup</Dropdown.Item>
        <Dropdown.Item href="/login">Login</Dropdown.Item>
        <Dropdown.Item href="/useeffect" >useEffect</Dropdown.Item>
        <Dropdown.Item href="/useState" >useState</Dropdown.Item>
        <Dropdown.Item href="/p" >UseContext</Dropdown.Item>
        <Dropdown.Item href="/redux" >Redux</Dropdown.Item>
        <Dropdown.Item href="/onChange" >Onchange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    </div>
  )
}

export default Naviagte