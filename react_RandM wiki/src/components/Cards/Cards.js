import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ page, results }) => {
  let display;
  if (results) {
    display = results.map((card) => {
      const { id, name, image, location, status } = card;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12  mb-4 d-flex
          justify-content-center"
        >
          <div className="cards position-relative ">
            <img src={image} alt="R&Mimage" className="img-fluid" />

            <div className="content p-2">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>

            <div
              className={`position-absolute badge ${(() => {
                if (status === "Alive") {
                  return "text-bg-success";
                } else if (status === "Dead") {
                  return "text-bg-danger";
                } else {
                  return "text-bg-secondary";
                }
              })()}`}
            >
              {status}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = <h5 className="fw-light">No Characters Found :/</h5>;
  }

  return (
    <div className="col-lg-8 col-12">
      <div className="row">{display}</div>
    </div>
  );
};

export default Cards;
