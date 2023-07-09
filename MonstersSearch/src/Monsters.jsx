import { useState, useEffect } from "react";
import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";
import "/public/styles/monsters.css";

export default function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMonsters();
  }, []);

  async function fetchMonsters() {
    const m = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (data) => data.json()
    );
    setMonsters(m);
  }

  const filteredMonsters = monsters.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchBox
        className="searchBox"
        placeholder="Search monster"
        handleChange={handleChange}
        value={search}
      />
      {monsters && <CardList monsters={filteredMonsters} />}
      {!monsters && <h1>Loading...</h1>}
    </>
  );
}
