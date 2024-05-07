import { useEffect, useState } from 'react';
import ProductCard from './productCard';
import './product.css';
export default function ProductApp(){

   const [product,updateProduct] =useState([])

   useEffect(()=>{
      getProducts()
   },[])

   async function getProducts(){
      let res = await fetch('https://fakestoreapi.com/products');
      let productList = await res.json()
      updateProduct(productList)
   }
   if(product.length == 0){
      return (<h1>Fetching data...</h1>)
   }

 return(
    // <Product {...prod1}/>
   //  <>
   //  <h2>Product Class</h2>
   //      <Product id={prod1.id} name ={prod1.name} aprice={prod1.aprice} dprice={prod1.dprice} />
   //  </>

   <div className='product-list'>
      <h3>Product Api call fetch</h3>
      {product.map((p)=><ProductCard {...p}></ProductCard>)}
   </div>
 )
}
