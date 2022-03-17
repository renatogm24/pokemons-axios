import "./App.css";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemons, setpokemons] = useState([]);

  const handleSubmit = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const {
        data: { results },
      } = response;
      setpokemons(results);
    });
  };

  return (
    <div className="w-1/2 my-5 mx-auto flex flex-col items-center">
      <Button variant="contained" onClick={handleSubmit} className="w-36">
        Fetch Pokemons
      </Button>
      <div className="w-full flex flex-col items-center my-5">
        <h2>Pokemon List</h2>
        <ul className="my-4">
          {pokemons.length > 0
            ? pokemons.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)
            : "Empty list"}
        </ul>
      </div>
    </div>
  );
}

export default App;
