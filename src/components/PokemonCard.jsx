import { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getSinglePokeData = async () => {
      const data = await fetch(url).then((result) => result.json());
      setPokemonData(data);
    };
    getSinglePokeData();
  }, []);
  return (
    <div className="card">
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
