import { useEffect, useState } from "react";

const PokemonCard = ({ url, setSelectedPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getSinglePokeData = async () => {
      const data = await fetch(url).then((result) => result.json());
      setPokemonData(data);
    };
    getSinglePokeData();
  }, [url]);
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedPokemon(pokemonData);
      }}
    >
      {pokemonData ? (
        <>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt="" />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokemonCard;
