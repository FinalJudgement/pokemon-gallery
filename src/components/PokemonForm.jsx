import { useEffect, useState } from "react";

const PokemonForm = ({ pokemonDataList, setPokemonDataList }) => {
  const [pokeName, setPokeName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      ).then((result) => result.json());
      setPokemonDataList([data, ...pokemonDataList]);
      setPokeName("");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(pokemonDataList);
  }, [pokemonDataList]);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pokemon Register:
        <input value={pokeName} onChange={(e) => setPokeName(e.target.value)} />
      </label>
      <button>Submit</button>
      {error && <span>{error}</span>}
    </form>
  );
};

export default PokemonForm;
