import {Route,Routes} from 'react-router-dom'
import HomePage from './HomePage'
import About from './About'
import ContactForm from './ContactForm'
import Payment from './Payment'
import ProductList from './ProductList'
import Profail from './Profail'
import Cart from './Cart'; 
import SpecifiProdact from './SpecifiProdact';

export const Routing=({products,addToCart,cart,removeFromCart,calculateTotalPrice})=>{

return<>
<Routes>
    <Route path="/ProductList" element={<ProductList products={products} addToCart={addToCart}/>} />
    <Route path="/About" element={<About/>}/>
    <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} calculateTotalPrice={calculateTotalPrice}/>} />
    <Route path="/ContactForm" element={<ContactForm/>}/>
    <Route path="/HomePage" element={<HomePage/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/Profail" element={<Profail/>}/>  
    <Route path="/SpecifiProdact/:pName/:discraption" element={<SpecifiProdact />} />
    <Route path="*" element={<h1>ברירת מחדל ,לא מצאנו  </h1>} />
</Routes>
</>
}