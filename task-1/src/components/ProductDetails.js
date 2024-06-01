import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const getProduct = async () => {
      const products = await fetchProducts();
      const product = products.find(p => p.id === productId);
      setProduct(product);
    };
    getProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.available ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetails;
