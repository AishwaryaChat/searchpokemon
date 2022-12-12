import { useRef } from "react";

import PokemonDataView from "./PokemonDataView/pokemonDataView";

function PokemonInfoFallback({ pokemonName }: { pokemonName: string }) {
  const initialName = useRef(pokemonName).current;
  const fallbackPokemonData = {
    name: initialName,
    number: "XXX",
    image: "/img//fallback-pokemon.jpg",
    attacks: {
      special: [
        { name: "Loading Attack 1", type: "Type", damage: "XX" },
        { name: "Loading Attack 2", type: "Type", damage: "XX" },
      ],
    },
    fetchedAt: "loading...",
  };
  return <PokemonDataView pokemonData={fallbackPokemonData} />;
}

export default PokemonInfoFallback;
