import React from "react";
import { FilterFunction } from "../FilterFunction";

const Status = ({ setPage, setStatus }) => {
  const status = ["Alive", "Dead", "Unknown"];

  const statusFilters = status.map((item, index) =>
    FilterFunction("status", item, index, setPage, setStatus)
  );

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionFilters"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {statusFilters}
        </div>
      </div>
    </div>
  );
};

export default Status;
