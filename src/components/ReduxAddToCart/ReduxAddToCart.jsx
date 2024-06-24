import { useSelector, useDispatch } from "react-redux";
function ReduxAddToCart({product}){
    let dispatch = useDispatch();
    function increase(){
        dispatch({type:"ADD_TO_CART", payload: product})
    }
    function decrease(){
        dispatch({type:"REMOVE_FROM_CART", payload: product})
    }

    let cart = useSelector((state)=>{
        return state.items;
    })

    console.log("addtocart " + product.id);
    let quantity = cart[product.title] ? cart[product.title].quantity : 0;
    if(quantity === 0){
        return(
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <button onClick={decrease}>-</button>
                <span style={{ color: 'black', padding: 0 }}>Quantity - {quantity}</span>
                <button onClick={increase}>+</button>
            </div>
            
        )
    }
    
    
}
export default ReduxAddToCart;