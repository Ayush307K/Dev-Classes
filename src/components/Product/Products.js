import React, { useState,useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useWindow from "../../hooks/UseWindow/useWindow";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Products(){

    const {cart} = useContext(CartContext);

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

    return (
        <div>
            {
                Object.values(cart).map(function (item){
                    return (<Cart product={item} cart={cart}/>);
                })
            }
            <hr></hr>
            <hr></hr>
            {
                products.map(function (item,index){
                    return (<ProductCard key={index} product={item}/>)
                })
            }
        </div>
    )
}

export default React.memo(Products);