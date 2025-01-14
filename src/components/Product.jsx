import { Link } from "react-router-dom";
import React from 'react';

function Product({ products, addToCart }) {

  return (

    <div className="product">
      <img src={`/Images/${products.img}`} alt={products.name} />
      <button >delete</button>
      <h3>{products.name}</h3>
      <p className="price">{products.price} ₪</p>
      <Link to={`/SpecifiProdact/${products.name}/${products.discraption}`} className="buy-button">
        לפרטים נוספים
      </Link>

      <button className="buy-button" onClick={() => addToCart(products)}>
        הוסף לעגלה
      </button>
    </div>
  );
}
export default Product;




