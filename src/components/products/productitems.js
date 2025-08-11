import { Component } from "react";
import axios from "axios";
import ProductImage from "./productimage";

class ItemsData extends Component{
    state={
    product:[]
}
componentDidMount() {
    this.handleClick();
  }


handleClick=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{this.setState( {product:res.data  } ) 
                    } )
}
    render(){
        console.log(this.state.product)

        const mystyle={
            border:"1px groove black",
            padding:"10px",
            margin:"10px",
            backgroundColor:'0 8px 16px 0 rgba(7,6,0,1.3)'
        }

   return(
        <>
          {/* <button onClick={this.handleClick}>View Items</button> */}
            {this.state.product.length>0 && this.state.product.map((element)=>{
            return(
            <div style={mystyle}>
                <ProductImage imageURL={element.image}/> 
                <h2>{element.category}</h2>
                <h2>Price - ${element.price}</h2>
                <h2>Rating - {element.rating.rate}</h2>
                <h2>{element.title}</h2>        
            </div>
                 )
    })
    }
    </>
)}
}
export default ItemsData;