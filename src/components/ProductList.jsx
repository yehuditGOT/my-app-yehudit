import { Link } from "react-router-dom";
import Product from "./Product";
import AddProduct from './AddProduct';


const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <>
      <Link to="./AddProduct">AddProduct</Link>
      <div className="container">
        <div className="product-list">
          {products.map((products, index) => (<Product key={index} products={products} addToCart={addToCart} removeFromCart={removeFromCart} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;