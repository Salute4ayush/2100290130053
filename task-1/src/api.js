import axios from 'axios';

const API_URL = 'http://example.com/api'; // Replace with the actual API URL

export const fetchProducts = async () => {
    const API_URL="http://20.244.56.144/test/companies/:companyname/categories/categoryname/products?top=10&minPrice=1&maxPrice=10000"
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};
