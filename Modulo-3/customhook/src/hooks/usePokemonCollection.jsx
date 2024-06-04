import React, { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const usePokemonCollection = () => {
  const [filter, setFilter] = useState('ditto');
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const debouncedFilter = useDebounce(filter, 500);

  useEffect(() => {
    const loadPokemon = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${debouncedFilter}`)
        .then((response) => response.json())
        .then((json) => setPokemonCollection([json]));
      
    };

    loadPokemon();
  }, [debouncedFilter]);

  return { filter, setFilter, pokemonCollection };
};
