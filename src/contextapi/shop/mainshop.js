import React, { createContext, useState } from "react";
import Count from "./count";
import Display from "./display";


export const shop = createContext();
const Mainshop=()=>{
    const [data,setData] =useState([
        {brand : "Intel"},
        {brand : "redmi"},
        {brand : "apple"},
        {brand : "samsung"}
    ]);

    return (

           <shop.Provider value={[data,setData]}>
               <center>
                   <Count/>
                   <Display/>
                </center>

          </shop.Provider>

    )
}
export default Mainshop;