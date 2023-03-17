/**
 * The Pagination component is used to display and navigate through a large set of items that are paginated.
 * @param currentPage - The current active page number.
 * @param totalPages - The total number of pages available.
 * @param onChangePage - The function to be called when a page is clicked.
 * @param itemsPerPage - The number of items to be displayed per page.
 * @param totalItems - The total number of items to be paginated.
 * @returns A React functional component that renders the Pagination component.
 */
import React from "react";
interface Props {
  currentPage: number;
  totalPages: number;
  onChangePage: (pageNumber: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onChangePage,
  itemsPerPage,
  totalItems,
}) => {
  /**

Generate page numbers to be displayed in the pagination component
@param totalPages - The total number of pages
@param currentPage - The current page number
@returns An array of page numbers or ellipsis to be displayed
*/
  const pageNumbers: (number | string)[] = [];

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
/**

Handle the click of a page number button
@param pageNumber - The page number or ellipsis that was clicked
*/
  const handlePageClick = (pageNumber: number | string) => {
    if (pageNumber === "...") {
      if (currentPage < totalPages / 2) {
        onChangePage(currentPage + 5);
      } else {
        onChangePage(currentPage - 5);
      }
    } else {
      onChangePage(typeof pageNumber === "number" ? pageNumber : currentPage);
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
            <span> &#x2770;</span>
          </button>
        </li>

{pageNumbers.map((pageNumber, index, arr) => (
  <li
    key={index}
    className={`rc-pagination-item ${
      pageNumber === currentPage ? "rc-pagination-item-active" : ""
    } ${
      typeof pageNumber === "string" ? "rc-pagination-disabled" : ""
    }  ${
      pageNumber !== currentPage &&
      pageNumber !== "..." &&
      index !== 0 &&
      index !== arr.length - 1
        ? "hide"
        : ""
    }`}
  >
    <>
      {console.log("pageNumber:", pageNumber)}
      {console.log(pageNumber !== "...")}
    </>
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
            onClick
={() => onChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>❱</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
