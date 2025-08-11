import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Prop } from './Prop'

export const Props = () => {
  const [data ,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products').then(res =>{
      setData(res.data);
      setLoading(false);
    })
    .catch(error =>{
      console.log("error ,error")
      setLoading(false);
    })
  },[]);

  return (
    <center>
    <Prop products ={data}/>
    </center>
  )
}
