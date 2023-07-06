import React from "react";
import { FilterFunction } from "../FilterFunction";

const Species = ({ setPage, setSpecies }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  // setStatus={setStatus}

  const spiecesFilters = species.map((item, index) =>
    FilterFunction("spiece", item, index, setPage, setSpecies)
  );

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionFilters"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {spiecesFilters}
        </div>
      </div>
    </div>
  );
};

export default Species;
