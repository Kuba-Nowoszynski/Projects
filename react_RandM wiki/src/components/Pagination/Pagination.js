import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, page, info }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={page === 1 ? 0 : page - 1}
      breakLabel="..."
      previousLabel="Prev"
      marginPagesDisplayed={width < 600 ? (width < 300 ? 1 : 2) : 3}
      previousClassName="btn btn-primary previous"
      nextLabel="Next"
      nextClassName="btn btn-primary next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
