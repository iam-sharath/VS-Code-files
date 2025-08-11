import React,{createContext,useState,useEffect} from "react";
import { Display } from "./Display";
import axios from "axios";

export const Data = createContext();

export const Main = () => {
    const [state,setState] = useState([])
    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products')

        .then( res =>{ setState(res.data) })
        .catch( error =>{ console.log(error) })
      },[]);
  return (
    <>
    <div>Main</div>
    <Data.Provider value={[state,setState]}>
        <center>
            <Display/>
        </center>

    </Data.Provider>

    </>
  )
}
