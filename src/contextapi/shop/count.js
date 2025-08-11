import React, { useContext } from "react";
import { shop } from "./mainshop";

const Count =()=>{
const [data,setData]=useContext(shop);

return (
    <div className="card">  
      <div className="card-body">
        <h3 className="card-title" style={{color:"white"}}>count : {data.length}</h3>
      </div> 
    </div>
)
}
export default Count;