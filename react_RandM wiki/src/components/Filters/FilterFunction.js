import React from "react";
import FilterButton from "./FilterButton";

export const FilterFunction = (name, item, index, setPage, setFilter) => {
  return (
    <FilterButton
      setPage={setPage}
      key={index}
      name={name}
      index={index}
      item={item}
      setFilter={() => {
        setFilter(item);
      }}
    />
  );
};

export default FilterFunction;
