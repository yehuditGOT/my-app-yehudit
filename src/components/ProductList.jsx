import Product from "./Product";

const ProductList = ({products,addToCart,removeFromCart}) => {
  return (
 <>
<div className="container">
  <div className="product-list">
  {products.map((products, index) => (<Product key={index} products={products} addToCart={addToCart} removeFromCart={removeFromCart}/>
))}
  </div>
</div>
    </>
  );
};
export default ProductList;