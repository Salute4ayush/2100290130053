import React from 'react';

const Filters = ({ categories, companies, onFilterChange }) => {
  return (
    <div className="filters">
      <div>
        <label>Category: </label>
        <select onChange={e => onFilterChange('category', e.target.value)}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Company: </label>
        <select onChange={e => onFilterChange('company', e.target.value)}>
          <option value="">All</option>
          {companies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Rating: </label>
        <input type="number" onChange={e => onFilterChange('rating', e.target.value)} />
      </div>
      <div>
        <label>Price Range: </label>
        <input type="number" onChange={e => onFilterChange('minPrice', e.target.value)} placeholder="Min" />
        <input type="number" onChange={e => onFilterChange('maxPrice', e.target.value)} placeholder="Max" />
      </div>
      <div>
        <label>Availability: </label>
        <select onChange={e => onFilterChange('available', e.target.value)}>
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
