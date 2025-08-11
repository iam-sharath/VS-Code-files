import { Component } from "react";
class ProductImage extends Component{
    render(){
        return(
            <img src={this.props.imageURL} width={200} height={200}/>
        )
    }
}
export default ProductImage;