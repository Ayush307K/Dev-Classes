function Cart({product, cart}){
    return(
        <div>
            I am Cart
            <p>Title -  {product.title}</p>
            <p>Brand - {product.brand}</p>
            <p>Price - {product.price.value}</p>
            <p>Quantity - {product.quantity}</p>
            <hr></hr>
        </div>
    )
}
export default Cart;