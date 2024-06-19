function Cart({product, cart}){
    return(
        <div>
            I am Cart
            <p > {product.title}</p>
            <p > {product.brand}</p>
            <p > {product.price.value}</p>
            <p> {product.quantity}</p>
            <hr></hr>
        </div>
    )
}
export default Cart;