// function Product(props){
// return(
//     <>
//     <p>id : {props.id}</p>
//     <p>name : {props.name}</p>
//     <p>Actual Price : {props.aprice}</p>
//     <p>Discount Price : {props.dprice}</p>
//     </>
// )
// }

function Product({id,name,aprice,dprice}){
    return(
        <>
        <p>id : {id}</p>
        <p>name : {name}</p>
        <p>Actual Price : {aprice}</p>
        <p>Discount Price : {dprice}</p>
        </>
    )
}
export default Product;