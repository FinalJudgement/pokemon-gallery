import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonDataList, setPokemonDataList] = useState([]);
  useEffect(() => {
    const getPOkeApiData = async () => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
      ).then((result) => result.json());
      setPokemonDataList(data.results);
    };

    getPOkeApiData();
  }, []);
  return (
    <div className="list">
      {pokemonDataList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
