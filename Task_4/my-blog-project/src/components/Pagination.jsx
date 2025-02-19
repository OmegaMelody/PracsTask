import React from "react";
import '../App';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-prev"
        disabled={currentPage === 1}
      >
        &laquo; Previous
      </button>

      <ul className="pagination-pages">
        {pageNumbers.map((num) => (
          <li key={num}>
            <button
              className={
                "pagination-page" + (num === currentPage ? " active" : "")
              }
              onClick={() => onPageChange(num)}
            >
              {num}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="pagination-next"
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
