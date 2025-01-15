import { Link } from 'react-router-dom';
import './Cart.css'; 
function Cart({ cart, removeFromCart, addToCart, calculateTotalPrice }) {
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.code}>
            <img src={`/Images/${item.img}`} alt={item.name} />
            <p>{item.name || "No name"}</p>
            <p>{item.price || "No price"}₪</p>
            <button className="buy-button" onClick={() => removeFromCart(item)}>➖</button>
            <span>{item.quantity}</span>
            <button className="buy-button" onClick={() => addToCart(item)}>➕</button>
          </li>
        ))}
      </ul>
      <p className="total-price">Total: {calculateTotalPrice()} ₪</p>
      <Link to={'/checkout'} className="checkout-button">
        Go to Checkout
      </Link>
    </div>
  );
}

export default Cart;
