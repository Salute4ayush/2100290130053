import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
      setCategories([...new Set(products.map(product => product.category))]);
      setCompanies([...new Set(products.map(product => product.company))]);
    };
    getProducts();
  }, []);

  const handleFilterChange = (filterType, value) => {
    let filtered = products;

    if (filterType === 'category' && value) {
      filtered = filtered.filter(product => product.category === value);
    }

    if (filterType === 'company' && value) {
      filtered = filtered.filter(product => product.company === value);
    }

    if (filterType === 'rating' && value) {
      filtered = filtered.filter(product => product.rating >= value);
    }

    if (filterType === 'minPrice' && value) {
      filtered = filtered.filter(product => product.price >= value);
    }

    if (filterType === 'maxPrice' && value) {
      filtered = filtered.filter(product => product.price <= value);
    }

    if (filterType === 'available' && value) {
      filtered = filtered.filter(product => product.available.toString() === value);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <h1>All Products</h1>
      <Filters
        categories={categories}
        companies={companies}
        onFilterChange={handleFilterChange}
      />
      <ProductList products={currentProducts} />
      <Pagination
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AllProductsPage;
