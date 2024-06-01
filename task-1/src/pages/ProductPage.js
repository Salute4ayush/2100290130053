import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductPage;
