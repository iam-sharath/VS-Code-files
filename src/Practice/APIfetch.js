import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const APIfetch = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/')
        .then(res => res.json())
        .then(data =>setData(data))
    },[])
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => setData(res.data))
    // })
  return (
    <div>
      {data.length>=1 ? data.map(data =>{
        return <div><Link></Link></div>
      }
      ):null}
        {/* {data.map(item=><li key={item.id}>{item.title}</li>)} */}
    </div>
  )
}

export default APIfetch;