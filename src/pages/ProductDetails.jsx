import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <img src={product.thumbnail} width="300"/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>⭐ Rating: {product.rating}</p>

      <div className="images">
        {product.images.map((img,index)=>(
          <img key={index} src={img} width="100"/>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;