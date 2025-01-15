import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import About from './About'
import ContactForm from './ContactForm'
import ProductList from './ProductList'
import Register from './Register'
import Cart from './Cart';
import SpecifiProdact from './SpecifiProdact';
import Checkout from './Checkout';
import Login from './Login';
import UserManeger from '../components/UserManeger';

export const Routing = ({ products, addToCart, cart, removeFromCart, calculateTotalPrice, deleteProduct }) => {

    return <>
        <Routes>
            <Route></Route>
            <Route path="/ProductList" element={<ProductList products={products} addToCart={addToCart} deleteProduct={deleteProduct} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} calculateTotalPrice={calculateTotalPrice} />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SpecifiProdact/:code/:name/:maker/:material/:price/:img/:discraption" element={<SpecifiProdact />} />
            <Route path="/UserManeger" element={<UserManeger />} />
            <Route path="/Checkout" element={<Checkout calculateTotalPrice={calculateTotalPrice} />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    </>
}