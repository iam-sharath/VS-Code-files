import { PureComponent } from "react";





class CountNUm extends PureComponent{
constructor(){
    super()
    this.state={
        counter:0
    }
}

handleCountNum=(value,type)=>{
    this.setState({
        counter: type=="increment"?this.state.counter+value:
         type=="decrement"?this.state.counter-value:0
    })
}


// handleIncrement=()=>{
//     this.setState(
//         {
//         counter:this.state.counter+1
//         }
//     )
// }
// handleDecrement=()=>{
//     this.setState(
//         {
//         counter:this.state.counter-1
//         }
//     )
// }



    render(){
        return(
            <>
            <h2>{this.state.counter}</h2>
<button onClick={()=>this.handleCountNum(1,"increment")}>Increment</button>
<button onClick={()=>this.handleCountNum(1,"decrement")}>dec</button>
<button onClick={()=>this.handleCountNum(0,"reset")}>re</button>
{/* <button onClick={this.handleDecrement}>Increment</button> */}
            </>
        )
    }
}
export default CountNUm;