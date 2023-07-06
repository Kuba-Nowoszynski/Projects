import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Select from "../components/Filters/Select";

const Episodes = () => {
  const [ep, setEp] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [results, setResults] = useState([]);
  const { air_date, name } = fetchedData;

  const api = `https://rickandmortyapi.com/api/episode/${ep}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);

      const charData = await Promise.all(
        data.characters.map((characterAPI) => {
          return fetch(characterAPI).then((res) => res.json());
        })
      );
      setResults(charData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row my-3 text-center">
        <h1 className="mb-3 fs-1">
          Episode name :{" "}
          <span className="text-primary">{name ? name : "Unknown"}</span>
        </h1>
        <h5>Air Date {air_date ? air_date : "Unknown"}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-5">
          <h4 className="text-center mb-3">Pick Episode</h4>
          <Select length={51} setID={setEp} name="Episode" />
        </div>
        <Cards page="/episodes/" results={results} />
      </div>
    </div>
  );
};

export default Episodes;

{
}
