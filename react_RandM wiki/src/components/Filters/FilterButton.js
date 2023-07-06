import React from "react";

const FilterButton = ({ name, index, item, setPage, setFilter }) => {
  return (
    <div>
      <div className="form-check">
        <input
          onClick={() => {
            setPage(1);
            setFilter();
          }}
          className="form-check-input d-none"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />

        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
