import React,{useContext} from "react";

import { Data } from "./Main";

export const Display = () => {
    const [data] = useContext(Data)
    console.log(data)

  return (
    <>
    {
        data.map((item)=> 
        <ul key={item} style={{listStyle:"none"}}>
            <li key={item.category}>{item.category}</li>
            <li key={item.image}><img src={item.image} style={{width:"100px"}}/></li>
            <li key={item.title}>{item.title}</li>
            <li key={item.price}>{item.price}</li>
            <li key={item.rating.rate}>{item.rating.rate}</li>
        </ul>)
    }
    <div>Display</div>
    </>
  )
}
