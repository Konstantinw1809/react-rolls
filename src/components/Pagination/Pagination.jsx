import React from "react";
import "./Pagination.scss";

const Pagination = ({ onChangePage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }

  const onClickPage = (number) => {
    onChangePage(number);
  };

  return (
    <div className="app__pagination">
      <ul className="app__pagination-list">
        {pageNumbers.map((number) => (
          <li className="app__pagination-list_item" key={number}>
            <a
              onClick={() => onClickPage(number)}
              href="#"
              className={`app__pagination-list_item-link ${
                number === currentPage ? "selected" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
