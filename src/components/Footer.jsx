import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>SHOP</h4>
          <ul>
            <li><Link to="/products">Dresses</Link></li>
            <li><Link to="/products">Jackets</Link></li>
            <li><Link to="/products">Skirts</Link></li>
            <li><Link to="/products">Shoes & Bags</Link></li>
            <li><Link to="/products">Gift Cards</Link></li>
            <li><Link to="/products">Sales & Offers</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li><Link to="/aboutUs">About</Link></li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Delivery and Return</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CUSTOMER SUPPORT</h4>
          <ul>
            <li><Link to="/aboutUs">Contact</Link></li>
            <li>Help</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Designed and developed by: <strong>ITAcademy</strong>
        </p>
        <div className="footer-social">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>TikTok</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;