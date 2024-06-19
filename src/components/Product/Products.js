import { useState,useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useWindow from "../../hooks/UseWindow/useWindow";
import Cart from "../Cart/Cart";
function Products({increaseQuantity, decreaseQuantity, cart}){

    // const products = [
    //     {
    //         id: 1,
    //         title: "Apple iPhone 14",
    //         price: "Rs. 1,00,000"
    //     },
    //     {
    //         id: 2,
    //         title: "Apple iPhone 13",
    //         price: "Rs. 70,000"
    //     },
    //     {
    //         id: 3,
    //         title: "Google Pixel 7",
    //         price: "Rs. 50,000"
    //     },
    //     {
    //         id: 4,
    //         title: "Nokia 1100",
    //         price: "Rs. 2,000"
    //     },
    //     {
    //         id: 5,
    //         title: "Samsung Galaxy S10",
    //         price: "Rs. 1,00,000"
    //     },
    //     {
    //         id: 6,
    //         title: "Sony Xperia S10",
    //         price: "Rs. 1,00,000"
    //     }
    // ];

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
            (response) => {
                return response.json();
            }
        ).then((res)=>{
            setProducts(res);
        })
    },[])

    // const [height,width] = useWindow();
    // console.log(height);
    // oldDom = [
        // <ProductCard title="Title 1" />,(1)
        // <ProductCard title="Title 2" />,(2)
        // <ProductCard title="Title 3" />(3)
    // ] 
    // newDom = [
        //
        // <ProductCard title="Title 1" />,(1)
        // <ProductCard title="Title 4" />,(2)
        // <ProductCard title="Title 2" />,(3)
        // <ProductCard title="Title 3" />(4)
    // ]
    // index should not be passed as the values in the array can
    // be jumbled and the previous values which actually hasn't changed
    // the react will think it has changed if an element is added in between

    return (
        <div>
            {/* <p>height : {height}</p>
            <p>width : {width}</p> */}
            {
                    Object.values(cart).map(function (item){
                        return (<Cart product={item} cart={cart}/>);
                    })
                }
            <hr></hr>
            <hr></hr>
            {
                products.map(function (item){
                    return (<ProductCard title={item.title} brand={item.brand} price={item.price} cart={cart} increaseQuantity = {increaseQuantity} decreaseQuantity={decreaseQuantity}/>)
                })
            }
        </div>
    )
}

// export let b = 10;
export default Products;