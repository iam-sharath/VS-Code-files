import { createContext, useState } from "react"


export const box = createContext();   // here box is the 'store' of createContex( )


const Main=({children})=>{

const [data,setData]=useState(0);

return(
    
    <box.Provider value ={[data,setData]}> 
      <center> 
      {children}
      <button onClick={()=>setData(data +1 )} > Increment </button>  
      <button onClick={()=>setData(data -1 )} > Decrement </button>  
      </center>
    </box.Provider>  

)
}
export default Main