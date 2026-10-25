function CartItem({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <img
        className="cart-item-image"
        src={"/images/" + product.id + ".jpg"}
        alt={product.title}
      />

      <div className="cart-item-info">
        <h3>{product.title}</h3>
        <p className="cart-item-price">${product.price}</p>
        {product.size && <p>Size: {product.size}</p>}
      </div>

      <div className="quantity">
        <button onClick={() => onDecrease(product.id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => onIncrease(product.id)}>+</button>
      </div>

      <button className="remove-button" onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;