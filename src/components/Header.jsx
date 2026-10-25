import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <span className="header-logo-letters">IT</span>
        <span className="header-logo-text">FASHION STORE</span>
      </Link>

      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/aboutUs">About</NavLink>
        <Link to="/aboutUs">Contact</Link>
        <Link to="/products" className="header-sale">Sale!</Link>
      </nav>

      <div className="header-right">
        <input className="header-search" type="text" placeholder="Search" />
        <Link to="/cart" className="header-icon">
          🛒
          {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
        </Link>
        <Link to="/login" className="header-icon">👤</Link>
      </div>
    </header>
  );
}

export default Header;