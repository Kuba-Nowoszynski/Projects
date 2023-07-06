import React from "react";

const Select = ({ length, name, setID }) => {
  const array = [...Array(length).keys()].map((num) => num + 1);
  const options = array.map((num) => (
    <option value={num} key={num}>
      {name} - {num}
    </option>
  ));
  return (
    <select
      onChange={(e) => {
        setID(e.target.value);
      }}
      className="form-select"
      aria-label={name}
    >
      <option value="1">Choose...</option>
      {options}
    </select>
  );
};

export default Select;
