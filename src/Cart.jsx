import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useCart } from "./context/CartContext";
import "./Cart.css";

function Cart({ showCheckout = true }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    cartTotal,
  } = useCart();

  let content;

  if (cartItems.length === 0) {
    content = <p className="cart-empty">Your cart is empty.</p>;
  } else {
    content = cartItems.map((product) => (
      <CartItem
        key={product.id}
        product={product}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeProduct}
      />
    ));
  }

  return (
    <div className="cart">
      <h1 className="cart-title">Your Cart</h1>

      {content}

      {cartItems.length > 0 && showCheckout && (
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <div className="cart-summary-row">
            <span>Discount</span>
            <span>0</span>
          </div>

          <div className="cart-summary-row cart-summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <Link to="/checkout" className="cart-checkout">
            Go To Checkout
          </Link>
        </div>
      )}

      {cartItems.length > 0 && !showCheckout && (
        <h2 className="cart-total">Total: ${cartTotal.toFixed(2)}</h2>
      )}
    </div>
  );
}

export default Cart;