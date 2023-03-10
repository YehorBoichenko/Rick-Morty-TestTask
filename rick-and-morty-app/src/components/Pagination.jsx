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

  console.log("pageNumbers", pageNumbers);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = `${indexOfFirstItem + 1}-${
    indexOfLastItem > totalItems ? totalItems : indexOfLastItem
  }`;

  return (
    <nav>
      <p className="pagination-label">
        Showing {currentItems} of {totalItems}
      </p>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((pageNumber, index) => (
          <li
            key={index}
            className={`page-item ${
              pageNumber === currentPage ? "active" : ""
            } ${typeof pageNumber === "string" ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() =>
                typeof pageNumber === "number" && onChangePage(pageNumber)
              }
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
