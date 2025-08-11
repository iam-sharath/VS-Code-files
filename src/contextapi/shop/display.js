import { useContext, useState } from "react";
import { shop } from "./mainshop";
import './mainshop.css'



const Display =()=>{

const [data,setData] = useContext(shop);

const [newdata,setNewdata] = useState('');

const HandleSubmit= (e) =>{
    e.preventDefault();
    setData([...data,{brand : newdata}])

}

const handleDelete = (index) => { 
  const newData = [...data];
  newData.splice(index, 1);
  setData(newData);
}

return (
    <div className="todo">
    <form className="form" onSubmit={HandleSubmit} autoComplete="off">
        <input 
        type="text" 
        onChange={(e)=>setNewdata(e.target.value)} 
        placeholder="Enter Your Brand" 
        className="input"
        />

        <input type="submit" value="Add" className="submit"/>
    </form>
      <div>
    {data.map((item,index)=> (
                    <div className="items" key={index} >
                        <h3 className="brand">{item.brand}</h3>
                        <button onClick={() => handleDelete(index)} className="buttons">X</button>
                    </div>
                ))}

      </div> 
    
    </div>
)
}
export default Display;