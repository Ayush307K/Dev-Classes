import {useRef} from 'react';
import { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';

function ProductCard({title, brand, price, cart, increaseQuantity, decreaseQuantity}){
    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    const [inputValue, setInputValue] = useState('class');
    // console.log(pRef);
    function printTitle(){
        // console.log("konichiwa");
        pRef.current.style.display = 'block';
    }

    function changeText(e){
        // const text1 = iRef.current.value;
        setInputValue(e.target.value);
        
        // oRef.current.innerText = oRef.current.innerText + text1;
        // oRef.current.innerText = `Over here - ${text1}`;

        // if (oRef.current) {
        //   oRef.current.innerText = `Over here - ${text1}`;
        // }
    };

    return(
        <div>
            <p onClick={printTitle}> {title}</p>
            <p ref={pRef}> {brand}</p>
            <p > {price.value}</p>
            

            {/* <p onClick={printTitle}>Products</p>
            <p style={{display: 'none'}} ref={pRef}>10</p> */}
            {/* <input type='text' ref={iRef} value={inputValue} onChange={changeText}></input>
            <p ref={oRef}>Over here - {inputValue}</p> */}

            <AddToCart product={{title,brand,price}} cart={cart} increaseQuantity = {increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            <hr></hr>
        </div>
    )
}

export default ProductCard;