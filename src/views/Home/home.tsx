import { FC, useState } from "react";
import SearchComponent from "./components/Search/search";
import PokemonInfo from "./components/PokemonInfo/pokemonInfo";
import PokemonErrorBoundary from "./components/Error";

const HomeComponent: FC = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleReset = () => {
    setPokemonName("");
  };

  const handleSubmit = (pokemonName: string) => {
    setPokemonName(pokemonName);
  };
  return (
    <div>
      <SearchComponent onSubmit={handleSubmit} />
      <PokemonErrorBoundary
        resetErrorBoundary={handleReset}
        resetKeys={[pokemonName]}
      >
        <PokemonInfo pokemonName={pokemonName} />
      </PokemonErrorBoundary>
    </div>
  );
};

export default HomeComponent;
