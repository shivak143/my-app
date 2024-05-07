function ProductCard({title,image,price,rating}){
return(
    <div className="card">
        <img src={image}/>
        <p>{title}</p>
        <p>Price : ${price}</p>
        <p>Rating : {rating.rate}</p>
    </div>
)
}

export default ProductCard