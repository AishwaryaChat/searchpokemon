import { FC, useState } from "react";
import SearchComponent from "./components/Search/search";
import PokemonInfo from "./components/PokemonInfo/pokemonInfo";
import PokemonErrorBoundary from "./components/Error";
import useStyles from "./home.styles";

const HomeComponent: FC = () => {
  const classes = useStyles();
  const [pokemonName, setPokemonName] = useState("");

  const handleReset = () => {
    setPokemonName("");
  };

  const handleSubmit = (pokemonName: string) => {
    setPokemonName(pokemonName);
  };
  return (
    <div className={classes.container}>
      <SearchComponent onSubmit={handleSubmit} />
      <div className={classes.pokemonInfo}>
        <PokemonErrorBoundary
          resetErrorBoundary={handleReset}
          resetKeys={[pokemonName]}
        >
          <div>
            <PokemonInfo pokemonName={pokemonName} />
          </div>
        </PokemonErrorBoundary>
      </div>
    </div>
  );
};

export default HomeComponent;
