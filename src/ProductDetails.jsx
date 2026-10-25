import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./api/apiClient";
import { useCart } from "./context/CartContext";
import "./ProductDetails.css";

const sizes = ["S", "M", "L", "XL"];

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProduct(id);
        console.log(data);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="details-message">Loading…</p>;
  }

  if (error || !product) {
    return <p className="details-message">Something went wrong.</p>;
  }

  return (
    <div className="details">
      <img
        className="details-image"
        src={"/images/" + product.id + ".jpg"}
        alt={product.title}
        onError={(e) => {
          e.target.style.visibility = "hidden";
        }}
      />

      <div className="details-info">
        <h1 className="details-title">{product.title}</h1>
        <p className="details-price">${product.price}</p>
        <p className="details-description">{product.description}</p>

        <p className="details-label">Select Size</p>
        <div className="details-sizes">
          {sizes.map((size) => (
            <button
              key={size}
              className={
                size === selectedSize
                  ? "details-size details-size-active"
                  : "details-size"
              }
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="details-quantity">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button
          className="details-add"
          onClick={() => addToCart(product, selectedSize, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;