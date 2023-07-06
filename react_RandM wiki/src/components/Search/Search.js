import React from "react";

const Search = ({ setSearch, setPage }) => {
  const handleChange = (event) => {
    setPage(1);
    setSearch(event.target.value);
  };

  return (
    <form
      className="d-flex flex-sm-row flex-column justify-content-center gap-4 mb-5 
    fs-6"
      onChange={handleChange}
    >
      <input
        className="input py-2 px-2"
        type="text"
        placeholder="Search for characters"
      />
      <button
        onClick={(event) => {
          event.preventDefault();
        }}
        className=" btn btn-primary fs-5 search-btn"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
