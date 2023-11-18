import { useState } from "react";
import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonPage from "./components/PokemonPage";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <>
      {selectedPokemon ? (
        <main>
          <PokemonPage
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        </main>
      ) : (
        <main>
          <h1 className="mainHeading">Pokemon List</h1>
          <PokemonList setSelectedPokemon={setSelectedPokemon} />
        </main>
      )}
    </>
  );
}

export default App;
