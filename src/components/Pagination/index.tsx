// src/Pagination.js
import React, { useState } from "react";

export const PaginateComponent = ({
  totalItems,
  itemsPerPage,
  returnCurrentPage,
}: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      returnCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      returnCurrentPage(currentPage - 1);
    }
  };

  return (
    <nav className="flex justify-center gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePrev}
        disabled={currentPage === 1}>
        Prev
      </button>
      <span className="text-gray-800">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNext}
        disabled={currentPage === totalPages}>
        Next
      </button>
    </nav>
  );
};
