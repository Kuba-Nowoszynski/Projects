import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Cards/CardDetails";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <h1 className="text-center my-3">Characters</h1>

      <Search setSearch={setSearch} setPage={setPage} />

      <div className="container">
        <div className="row">
          <Filters
            setPage={setPage}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
          />
          <Cards page="/" results={results} />
        </div>
      </div>

      <Pagination setPage={setPage} page={page} info={info} />
    </div>
  );
};
