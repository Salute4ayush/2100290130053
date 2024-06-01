import React from 'react';

const Pagination = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={index + 1 === currentPage ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
