import logo from './logo.svg';
import './App.css';
import Products from './components/Product/Products.js';
// import {b} from './Products';
import Effect from './components/Effect/Effect.js';
import NavBar from './components/Portfolio/NavBar/NavBar.js';
import TypeWriter from './components/Portfolio/TypeWriter/TypeWriter.js';
import Tile from './components/Portfolio/Tile/Tile.js';
import Banner from './components/Portfolio/Banner/Banner.jsx';
import ProgressBar from './components/Portfolio/ProgressBar/ProgressBar.jsx';
import { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';


function App() {
  // console.log(b);
  // const [percentage,SetPercentage] = useState(0);
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     SetPercentage((prev)=>(prev<90? prev+10 : 100));
  //   },1000)
  //   return () => clearInterval(interval)
  // })

  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    
    const newCart = {...cart};

    if (!newCart[product.title]) {
      newCart[product.title] = { ...product, quantity:0};
    } 
    newCart[product.title].quantity += 1;
    
    setCart(newCart);
  }

  function decreaseQuantity(product) {

    const newCart = {...cart};

    if (!newCart[product.title]) return;

    newCart[product.title].quantity -= 1;
    if (newCart[product.title].quantity <= 0) {
      delete newCart[product.title];
    } 
    
    setCart(newCart);
  }


  
  return (
    <div className="App">
      {
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      
      /* <NavBar />
      <TypeWriter text={["SOFTWARE DEVELOPER","MERN STACK DEVELOPER"]} typingSpeed={100} deletingSpeed={50} />
      <Tile 
        header={"class going on"} 
        subHeader={"Everyone is making something"}
        img = {"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
        text = {"Approved training partner under the scheme for ancinkn isndc  dionc vviosdn onivdikm osnvidk sdvonin sond n onsidv sdonx"}
        link = {"https://www.scaler.com"}
        position = {"img-right"}
        bgColor = {"green"}
        />
        <Banner />
        <ProgressBar percentage={percentage}/> */
          //  <NavBar />
          // <TypeWriter text={["SOFTWARE DEVELOPER","MERN STACK DEVELOPER"]} typingSpeed={100} deletingSpeed={50} />
          // <Tile
          //   header={"class going on"}
          //   subHeader={"Everyone is making something"}
          //   img = {"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
          //   text = {"Approved training partner under the scheme for ancinkn isndc  dionc vviosdn onivdikm osnvidk sdvonin sond n onsidv sdonx"}
          //   link = {"https://www.scaler.com"}
          //   position = {"img-right"}
          //   bgColor = {"green"}
          //   />
          //   <Banner />
          //   <ProgressBar percentage={percentage}/> 
          // <Effect />
      }

      <Products increaseQuantity = {increaseQuantity} cart={cart} decreaseQuantity={decreaseQuantity} />
      
  
    </div>
  );
}

export default App;
