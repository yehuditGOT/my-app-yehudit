import React, { useState } from "react"; 
import "./Checkout.css";

function Checkout({ calculateTotalPrice }) {
  const [showPopup, setShowPopup] = useState(false); // Define state

  const handleOrderConfirmation = () => {
    setShowPopup(true); // Show the popup
    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 3 seconds
    }, 3000);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Your Order</h1>
      <p className="checkout-total">
        Total to Pay: <span>{calculateTotalPrice()} ₪</span>
      </p>
      <button className="checkout-button" onClick={handleOrderConfirmation}>
        Confirm Order
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <p>An invoice has been sent to your email</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
