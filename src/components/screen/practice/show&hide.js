import React,{ useState } from "react"

const ShowAndHide=()=>{
    const [show,setShow]=useState(true)

    // handleClick=()=>{
    //     setShow((show)=>!show)
    // }

return(
    <>

    <button onClick={() => setShow((show) => !show)}>show/hide</button>
    {show ?<h1>hi</h1>:null}
    </>
)

}
export default ShowAndHide;