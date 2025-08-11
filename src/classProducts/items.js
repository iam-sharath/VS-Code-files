import axios from "axios"
import React,{ useEffect, useState } from "react"




const Items=()=>{
const [data,setData]=useState([]);
const [cart,setCart]=useState([]);
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>setData(res.data))
    .catch(err=>console.error(err))
},[])


const addToCart =(item)=>{
setCart([...cart, item]);
}
// console.log(cart)

const itemsstyle={
    // color:"#2f4f4f",
    fontFamily:"sans-serif"
}
const box={
  display:"flex",
  padding:"10px",
  margin:"10px",
//   flexDirection:"",
//   border:"1px groove red",
  width:"50%",
  boxShadow: "0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)",
  backgroundColor:"#f5f5dc"
  
}

return(
  <div>
      {cart.length > 0 && (<div><h3>Cart Items: {cart.length}</h3></div>)}

        {data.length >0 ? data.map((element)=>{
            return(
                <div style={box}>
                    <div style={itemsstyle}>
                     {/* <p>{element.category}</p> */}
                     <img style={{margin:"5px 5px 10px 70px",padding:"10px",border:"1px groove black"}}
                      src={element.image} width={200} height={200}/>

                     <h4>{element.title}</h4>       
                     <h4>Price - ${element.price}</h4>
                     <h4>Rating - {element.rating.rate}</h4>
                     {/* <h2>{cart}</h2> */}
                     <button onClick={() => addToCart(element)}> Add to Cart </button>
                     <button>Buy</button>
                   </div>
                   </div>
                   )
            })
                 :<h2>No product</h2>}
    </div>
);
};
export default Items;