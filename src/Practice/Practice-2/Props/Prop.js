import React from 'react'

export const Prop = (props) => {
    // console.log(props.prop[0])
  return (
    <div>
        {props.products.map((item)=>(
            <ul style={{listStyle:"none"}}>
                
                <li key={item.category}>{item.category}</li>
                <li key={item.image}><img src={item.image} alt={item.image} style={{width:"100px"}}/></li>
                <li key={item.title}>{item.title}</li>
                <li key={item.price}>Price : {item.price}</li>
                <li key={item.rating.rate}>Rating : {item.rating.rate}</li>
                
            </ul>
        ))}
    </div>
  )
}
