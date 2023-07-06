import React from "react";
import { FilterFunction } from "../FilterFunction";

const Gender = ({ setPage, setGender }) => {
  const gender = ["Female", "Male", "Genderless", "Unknown"];

  const genderFilters = gender.map((item, index) =>
    FilterFunction("gender", item, index, setPage, setGender)
  );

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionFilters"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genderFilters}
        </div>
      </div>
    </div>
  );
};

export default Gender;
