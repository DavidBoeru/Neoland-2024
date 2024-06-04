import React from "react";
import { usePokemonCollection } from "./hooks/usePokemonCollection";

export const App = () => {
  const { filter, setFilter, pokemonCollection } = usePokemonCollection();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filtrar por nombre de Pokémon"
      />
      <ul>
        {pokemonCollection.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}


