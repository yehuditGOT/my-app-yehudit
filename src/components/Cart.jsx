function Cart({ cart, removeFromCart,addToCart }) {
  if (!cart || cart.length === 0) {
    return <p>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Your cart is empty!</p>;
  }
  return (
    <ul>
      {cart.map((item) => (
        <li key={item.code}>

          <img src={`/images/${item.img}`} alt={item.pName} width={50} />
          <p>{item.pName || "אין שם"}</p>
          <p>{item.price || "אין מחיר"}₪</p>
          <button onClick={() => removeFromCart(item)}>➖</button>
          <span>{item.quantity}</span>
          <button onClick={()=> addToCart(item)}>➕</button>
        </li>
      ))}
    </ul>
  );
}

export default Cart;
