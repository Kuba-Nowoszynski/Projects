import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  const [fetchedData, updateFetchedData] = useState([]);
  const { name, image, status, gender, location, origin, species } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, []);

  return (
    <div className="d-flex justify-content-center  mx-auto mt-3 card-details text-center">
      <div className="d-flex flex-column gap-3">
        <div className="fs-1 fw-semibold  mb-3">{name}</div>

        <img src={image} alt="R&Mimage" className="img-fluid" />

        <div
          className={`badge mt-3 fs-5 ${(() => {
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

        <div className="content my-3 text-start">
          <div className="fw-bold">
            Gender: <span className="fw-normal">{gender}</span>
          </div>
          <div className="fw-bold">
            Location: <span className="fw-normal">{location?.name}</span>
          </div>
          <div className="fw-bold">
            Origin: <span className="fw-normal">{origin?.name}</span>
          </div>
          <div className="fw-bold">
            Species: <span className="fw-normal">{species}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
