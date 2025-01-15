import { Link } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import MyContext from "../Contexts/Contexts";

function Product({ products, addToCart, deleteProduct }) {
  const currentUser = useContext(MyContext).currentUser;
  const delitProd = (code) => {
    deleteProduct(code);
    alert(code + " נמחק מהמאגר");
  }
  return (

    <div className="product">
      <img src={`/Images/${products.img}`} alt={products.name} />
      {currentUser?.role === "maneger" &&
        <button className="delete-button" onClick={() => delitProd(products.code)}>
          🗑️
        </button>}
      <h3>{products.name}</h3>
      <p className="price">{products.price} ₪</p>
      <Link
        to={`/SpecifiProdact/${products.code}/${products.name}/${products.maker}/${products.material}/${products.price}/${products.img}/${products.discraption}`}
        className="buy-button"
      >
        For more details
      </Link>
      <button className="buy-button" onClick={() => addToCart(products)}>
        🛒➕
      </button>
    </div>
  );
}
export default Product;




