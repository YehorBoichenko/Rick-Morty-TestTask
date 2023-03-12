import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onChangePage,
  itemsPerPage,
  totalItems,
}) => {
  const pageNumbers = [];

  if (totalPages <= 8) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else if (currentPage <= 4) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push("...");
    pageNumbers.push(totalPages);
  } else if (currentPage > totalPages - 4) {
    pageNumbers.push(1);
    pageNumbers.push("...");
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);
    pageNumbers.push("...");
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  const handlePageClick = (pageNumber) => {
    if (pageNumber === "...") {
      if (currentPage < totalPages / 2) {
        onChangePage(currentPage + 5);
      } else {
        onChangePage(currentPage - 5);
      }
    } else {
      onChangePage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    totalItems > 0
      ? `${indexOfFirstItem + 1}-${
          indexOfLastItem > totalItems ? totalItems : indexOfLastItem
        } of ${totalItems}`
      : "";

  return (
    <nav className="rc-pagination">
      <div className="rc-pagination-count">Showing {currentItems}</div>
      <ul>
        <li
          className={`rc-pagination-item ${
            currentPage === 1 ? "rc-pagination-disabled" : ""
          }`}
        >
          <button
            className="rc-pagination-prev"
            onClick={() => onChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span>&#x21d0;</span>
          </button>
        </li>

        {pageNumbers.map((pageNumber, index) => (
          <li
            key={index}
            className={`rc-pagination-item ${
              pageNumber === currentPage ? "rc-pagination-item-active" : ""
            } ${
              typeof pageNumber === "string" ? "rc-pagination-disabled" : ""
            }`}
          >
            <button
              onClick={() => handlePageClick(pageNumber)}
              disabled={typeof pageNumber === "string"}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li
          className={`rc-pagination-item ${
            currentPage === totalPages ? "rc-pagination-disabled" : ""
          }`}
        >
          <button
            className="rc-pagination-next"
            onClick={() => onChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>&#x21d2;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
