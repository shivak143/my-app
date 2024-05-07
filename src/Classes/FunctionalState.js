// import {useState} from 'react'
// function State() {
//   let [counter, updateCounter] = useState(0);
//   return (
//     <>
//       <h2>Counter Value : {counter} </h2>
//       <button id="update"className="btn btn-outline-success"onClick={() => {updateCounter(++counter)}}>Change</button>
//     </>
//   );
// }
// export default State

import { useState } from "react";
function FunctionalState() {
//   let price = 160000;
//   let [name, updateName] = useState("Iphone 15 pro max");
let [product,UpdateProduct] = useState({
    name : "Iphone 15 pro max",
    price : 150000
})
  return (
    <>
      <h3>Phone : {product.name}</h3>
      <h2>Price : {product.price}</h2>
      <input id="pname" />
      <button onClick={() =>{
        let pname = document.getElementById('pname').value;
        UpdateProduct({
            ...product,
            price : pname
        })

      }}>Update</button>
    </>
  );
}

export default FunctionalState
