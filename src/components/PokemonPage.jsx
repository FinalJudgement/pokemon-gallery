const PokemonPage = ({ selectedPokemon, setSelectedPokemon }) => {
  return (
    <div className="poke-page">
      <h1>{selectedPokemon.name}</h1>
      <p>
        Type:{" "}
        {selectedPokemon.types.length >= 2
          ? `${selectedPokemon.types[0].type.name}, ${selectedPokemon.types[1].type.name}`
          : selectedPokemon.types[0].type.name}
      </p>
      <img
        src={selectedPokemon.sprites.front_default}
        alt={`picture of ${selectedPokemon.name}`}
      />
      <p>Level 1</p>

      {selectedPokemon.stats.map((obj) => {
        return <p key={obj.stat.url}>{`${obj.stat.name} ${obj.base_stat}`}</p>;
      })}

      <button
        onClick={() => {
          setSelectedPokemon(null);
        }}
      >
        back
      </button>
    </div>
  );
};

export default PokemonPage;
