import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="price">₹{product.price}</p>
        <p className="rating">⭐ {product.rating}</p>
        <p className="discount">{product.discountPercentage}% OFF</p>
      </div>
    </Link>
  );
};

export default ProductCard;