import './App.css';
import { useState } from "react";
import { Routing } from './components/Routing';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // חשוב: הייבוא של הרכיבים הנחוצים

function App() {
  const [products] = useState([
    { code: 1, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 2, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 3, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 4, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 5, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 6, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 7, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" },
    { code: 8, pName: "Porcelain doll", maker: "Made in China, by Bobo", material: "Porcelain", price: 100, img: "רקע.png", discraption: "Distant lands that have always thought about how to create conservative dolls" }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.code === product.code);
    if (existingProduct) {
      // אם המוצר כבר בעגלה, עדכן את הכמות
      setCart(cart.map(item =>
        item.code === product.code ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // אם המוצר לא בעגלה, הוסף אותו עם כמות 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

 const removeFromCart = (product) => {
  const existingProduct = cart.find(item => item.code === product.code);
  if (existingProduct && existingProduct.quantity > 1) {
    // אם המוצר קיים ויש לו כמות גדולה מ-1, הפחת כמות
    setCart(cart.map(item =>
      item.code === product.code ? { ...item, quantity: item.quantity - 1 } : item
    ));
  } else {
    // אם הכמות היא 1, הסר את המוצר לחלוטין
    setCart(cart.filter(item => item.code !== product.code));
  }
};

  return (
    <>
      <header className="homepage-header">
        <div className="logo">⚪⚫</div>
          <nav className="homepage-nav">
            <Link to="/HomePage">Home Page</Link>
            <Link to="/About">About</Link>
            <Link to="/ProductList">ProductList</Link>
            <Link to="/ContactForm">☎️</Link>
            <Link to="/Profail">👩</Link>
            <Link to="/Cart">({cart.length})🛒</Link>
          </nav>
        </header>
        <main>
          <Routing products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
          <footer className="homepage-footer">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
           </footer>
        </main>
    </>
  );
}
export default App;






