

import React from "react";
// class State extends React.Component{
//     state ={
//         counter : 0
//     }
//     render(){
//         return (
//             <>
//             <h2>Counter Value : {this.state.counter}</h2>
//             <button className="btn btn-outline-primary" onClick={()=>{this.setState({
//                 counter :this.state.counter +1
//             })}}>Change</button>
//             </>
//         )
//     }
// }
class ClassState extends React.Component {
  state = {
    product: "Iphone15 pro max",
    price: 150000,
  };
  constructor() {
    super();
    this.updatePrice = this.updatePrice.bind(this);
  }
  render() {
    return (
      <>
        <h4>Phone : {this.state.product}</h4>
        <h4>price : {this.state.price}</h4>
        <input id="price" type="number" />
        <button className="btn btn-outline-primary" onClick={this.updatePrice}>
          update
        </button>
      </>
    );
  }
  updatePrice() {
    let p = document.getElementById("price").value;
    console.log(p);
    this.setState({
      price: p,
    },()=>{console.log(this.state)});
  }
}

export default ClassState;
