import { useContext, useState } from "react";
import { Routing } from './Routing';
import MyContex from "../Contexts/Contexts";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // חשוב: הייבוא של הרכיבים הנחוצים
export const MyApp = () => {
    const [products, setProducs] = useState([
        { code: 1, name: "Victoria", maker: "Handcrafted by Artisan Dolls, UK", material: "Porcelain", price: 25, img: "1.jpg", discraption: "A sophisticated doll inspired by the elegance of Victorian-era fashion and charm." },
        { code: 2, name: "Jasmine", maker: "Made in Morocco, by Artisan's Craft", material: "Porcelain", price: 20, img: "2.png", discraption: "This doll captures the beauty of Moroccan artistry with vibrant patterns and delicate features." },
        { code: 3, name: "Sophia", maker: "Designed in France by La Belle Dolls", material: "Porcelain", price: 30, img: "3.png", discraption: "A Parisian masterpiece, featuring intricate details and timeless elegance." },
        { code: 4, name: "Mei Ling", maker: "Handcrafted in China by Ling's Workshop", material: "Porcelain", price: 18, img: "4.png", discraption: "A delicate portrayal of traditional Chinese beauty with vibrant colors and a serene expression." },
        { code: 5, name: "Isabella", maker: "Made in Italy by Bella Creations", material: "Porcelain", price: 27, img: "5.png", discraption: "Inspired by Italian Renaissance art, Isabella radiates grace and sophistication." },
        { code: 6, name: "Charlotte", maker: "Crafted in Germany by Kinder Dolls", material: "Porcelain", price: 22, img: "6.png", discraption: "A classic German design with intricate lace details and a charming smile." },
        { code: 7, name: "Amara", maker: "Created in Kenya by Tribal Treasures", material: "Porcelain and Fabric", price: 19, img: "7.png", discraption: "A stunning doll showcasing the vibrant colors and patterns of African culture." },
        { code: 8, name: "Anastasia", maker: "Handcrafted in Russia by Winter Tales", material: "Porcelain", price: 32, img: "8.png", discraption: "An enchanting doll inspired by Russian folklore and winter wonderlands." },
        { code: 9, name: "Eliza", maker: "Made in the USA by Heritage Dolls Co.", material: "Porcelain", price: 23, img: "9.jpg", discraption: "A heartfelt creation inspired by the rich history of American prairie life." }

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
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const outUser = useContext(MyContex).logOut;
    const currentUser = useContext(MyContex).currentUser;
    /// מחיקת מוצר רק בשביל המנהל
    const deleteProduct = (code) => {
        const updatedItems = products.filter(products => products.code !== code);
        setProducs(updatedItems);
    }
    return <>
        <header className="homepage-header">
            
            <span>{currentUser == null ? "Connect to the website" : "Hello " + currentUser.name}</span>
            <nav className="homepage-nav">
                <Link to="/HomePage">Home Page</Link>
                <Link to="/About">About</Link>
                <Link to="/ProductList">ProductList</Link>
                {currentUser == null ? (
                    <>
                        <Link to="/Login"> Log in</Link>
                        <Link to="/Register">Register</Link>
                    </>
                ) : (
                    <>
                        <button onClick={outUser}>log out</button>
                    </>
                )}
                {currentUser && currentUser.role === "maneger" && <Link to="/UserManeger">👨‍💼</Link>}
                <Link to="/Cart">({cart.length})🛒</Link>
                <Link to="/ContactForm">☎️</Link>
            </nav>
        </header>
        <main>
            <Routing products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} calculateTotalPrice={calculateTotalPrice} deleteProduct={deleteProduct} />
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
}