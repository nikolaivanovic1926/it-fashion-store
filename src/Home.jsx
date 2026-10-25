import { Link } from "react-router-dom";
import "./Home.css";

const brands = ["Bershka", "H&M", "ZARA", "KOTON"];

const categories = [
  { name: "Women", value: "women", image: "/images/women.jpg" },
  { name: "Kids", value: "kids", image: "/images/kids.jpg" },
  { name: "Men", value: "men", image: "/images/men.jpg" },
];

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-top">
          <div className="home-hero-text">
            <h1>Discover Brands</h1>
            <p>
              Discover a collection that blends style and comfort. Browse our
              carefully selected pieces of modern clothing that follow the
              latest trends while staying true to your unique style.
            </p>
          </div>
          <div className="home-hero-logo">
            <span className="home-hero-logo-letters">IT</span>
            <span className="home-hero-logo-text">FASHION STORE</span>
          </div>
        </div>

        <div className="home-brands">
          {brands.map((brand) => (
            <span key={brand} className="home-brand">
              {brand}
            </span>
          ))}
        </div>
      </section>

      <section className="home-arrivals">
        <h2>New Arrivals</h2>

        <div className="home-categories">
          {categories.map((category) => (
            <div key={category.value} className="home-category">
              <img
                className="home-category-image"
                src={category.image}
                alt={category.name}
              />
              <Link
                to={"/products?category=" + category.value}
                className="home-button"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="home-promo">
        <div className="home-promo-images">
          <img src="/images/promo1.jpg" alt="Couple in autumn coats" />
          <img src="/images/promo2.jpg" alt="Kids in autumn coats" />
        </div>

        <div className="home-promo-bar">
          <h2>Enjoy 20% Off This Season’s Styles</h2>
          <Link to="/products" className="home-button">
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;