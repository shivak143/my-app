const styles = {
  margin: 10,
  color: "green",
  border : '2px solid gray',
  padding : 5,
  width : 200,
  display : 'inline-block'
};
export function Car(props) {
  return (
    <div style={styles}>
        {console.log(props.brand)}
        {console.log(props.children)}
      <h3 style={{color:'black'}}>My car </h3>
      <span >{props.children}</span>
      <p>Car : {props.brand.name} !.</p>
      <p>Model : {props.brand.model} !.</p>
      <p>Color : {props.brand.color} !.</p>
      <i className="bi bi-gear-fill"></i>
    </div>
  );
}

// import React from 'react';
// export class Car extends React.Component {

//     render(){
//         return (
//                 <div style ={styles}>
//                   <p>Iam {this.props.brand.name} !.</p>
//                   <p>Model :  {this.props.brand.model} !.</p>
//                   <p>Color : {this.props.brand.color} !.</p>
//                 </div>
//               );
//     }

// }
