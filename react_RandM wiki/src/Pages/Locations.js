import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Select from "../components/Filters/Select";

const Locations = () => {
  const [location, setLocation] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [results, setResults] = useState([]);
  const { type, name, dimension } = fetchedData;

  const api = `https://rickandmortyapi.com/api/location/${location}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);

      const charData = await Promise.all(
        data.residents.map((characterAPI) => {
          return fetch(characterAPI).then((res) => res.json());
        })
      );
      setResults(charData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row my-3 text-center">
        <h1 className=" mb-3 fs-1">
          Location :{" "}
          <span className="text-primary">{name ? name : "Unknown"}</span>
        </h1>
        <h5>Dimension: {dimension ? dimension : "Unknown"}</h5>
        <h6>Type: {type ? type : "Unknown"}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-5">
          <h4 className="text-center mb-3">Pick Location</h4>
          <Select length={126} setID={setLocation} name="Location" />
        </div>
        <Cards page="/locations/" results={results} />
      </div>
    </div>
  );
};

export default Locations;

{
}
