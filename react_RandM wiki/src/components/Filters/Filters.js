import React from "react";
import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Species from "./Category/Species";

const Filters = ({ setPage, setStatus, setSpecies, setGender }) => {
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={() => {
          window.location.reload();
        }}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-3"
      >
        Clear filters
      </div>

      <div className="accordion" id="accordionFilters">
        <Status setPage={setPage} setStatus={setStatus} />
        <Species setPage={setPage} setSpecies={setSpecies} />
        <Gender setPage={setPage} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
