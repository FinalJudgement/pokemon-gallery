import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <>
      <h1 className="mainHeading">Pokemon List</h1>
      <main>
        <PokemonList />
      </main>
    </>
  );
}

export default App;
