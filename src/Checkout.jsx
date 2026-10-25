import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import { addCart } from "./api/apiClient";
import "./Form.css";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { userId } = useAuth();

  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {
    const somethingEmpty = Object.values(shipping).some((value) => value === "");

    if (somethingEmpty) {
      setError("Please fill in all shipping fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await addCart({
        userId: userId,
        products: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      });
      clearCart();
      setDone(true);
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="checkout-message">
        <h1>Thank you for your purchase!</h1>
        <Link to="/products">Continue shopping</Link>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="checkout-message">
        <h1>Please log in to continue.</h1>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-message">
        <h1>Your cart is empty.</h1>
        <Link to="/products">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-columns">
        <div className="checkout-left">
          <h2>Shipping Information</h2>

          <div className="form-box checkout-box">
            <label className="form-label" htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="form-input"
              name="firstName"
              value={shipping.firstName}
              onChange={handleChange}
            />

            <label className="form-label" htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className="form-input"
              name="lastName"
              value={shipping.lastName}
              onChange={handleChange}
            />

            <label className="form-label" htmlFor="address">Address</label>
            <input
              id="address"
              className="form-input"
              name="address"
              value={shipping.address}
              onChange={handleChange}
            />

            <label className="form-label" htmlFor="city">City</label>
            <input
              id="city"
              className="form-input"
              name="city"
              value={shipping.city}
              onChange={handleChange}
            />

            {error && <p className="form-error">{error}</p>}

            <button
              className="form-button"
              onClick={handlePay}
              disabled={loading}
            >
              {loading ? "Processing…" : "Pay"}
            </button>
          </div>
        </div>

        <div className="checkout-right">
          <h2>Review your Cart</h2>
          <Cart showCheckout={false} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;