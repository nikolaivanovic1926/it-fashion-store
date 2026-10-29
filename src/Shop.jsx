import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProducts } from "./api/apiClient";
import { useCart } from "./context/CartContext";
import "./Shop.css";

const idsWithImages = [];

function matchesCategory(productCategory, wanted) {
  const text = String(productCategory || "").toLowerCase();
  const wantedText = wanted.toLowerCase();

  if (text === wantedText) {
    return true;
  }

  const words = text.replace(/'/g, "").split(/[^a-z]+/);
  return words.includes(wantedText) || words.includes(wantedText + "s");
}

function Shop({ category }) {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const activeCategory = category || searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email === "") {
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const filteredProducts = activeCategory
    ? products.filter((product) =>
        matchesCategory(product.category, activeCategory)
      )
    : products;

  const visibleProducts =
    idsWithImages.length === 0
      ? filteredProducts
      : filteredProducts.filter((product) =>
          idsWithImages.includes(product.id)
        );

  let content;

  if (loading) {
    content = <p className="shop-message">Loading…</p>;
  } else if (error) {
    content = <p className="shop-message">Something went wrong.</p>;
  } else if (visibleProducts.length === 0) {
    content = <p className="shop-message">No products found.</p>;
  } else {
    content = (
      <div className="shop-grid">
        {visibleProducts.map((product) => (
          <div className="shop-card" key={product.id}>
            <Link to={"/products/" + product.id}>
              <img
                className="shop-card-image"
                src={"/images/" + product.id + ".jpg"}
                alt={product.title}
                onError={(e) => {
                  e.target.style.visibility = "hidden";
                }}
              />
            </Link>
            <h3 className="shop-card-title">{product.title}</h3>
            <p className="shop-card-price">${product.price}</p>
            <button
              className="shop-card-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="shop">
        <h1 className="shop-title">
          {activeCategory ? activeCategory : "View All Products"}
        </h1>
        {content}
      </div>

      <section className="newsletter">
        <h2>STAY UP TO DATE ABOUT OUR BEST OFFERS!</h2>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            className="newsletter-input"
            type="email"
            placeholder="Enter your email address…"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="newsletter-button" type="submit">
            Subscribe to Newsletter
          </button>
          {subscribed && (
            <p className="newsletter-thanks">Thanks for subscribing!</p>
          )}
        </form>
      </section>
    </>
  );
}

export default Shop;