import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonForm from "./PokemonForm";

const PokemonList = ({ setSelectedPokemon }) => {
  const [pokemonDataList, setPokemonDataList] = useState([]);

  useEffect(() => {
    const getPokeApiData = async () => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
      ).then((result) => result.json());
      setPokemonDataList(data.results);
    };

    if (pokemonDataList.length === 0) {
      getPokeApiData();
    }
  }, []);
  return (
    <div>
      <PokemonForm
        setPokemonDataList={setPokemonDataList}
        pokemonDataList={pokemonDataList}
      />

      <div className="list">
        {pokemonDataList.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              url={
                pokemon.url || `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
              }
              setSelectedPokemon={setSelectedPokemon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
