import { FC, useEffect} from "react";
import PokemonDataView from "../PokemonDataView/pokemonDataView";
import { BASE_URL } from "../../../../api.constants";
import { getPoke } from "../../../../adapters/pokemon";
import { useAsync, StatusType } from "../../../../hooks/useAsync";
import {pokemonDataTransformer} from "../../transformer"
import PokemonInfoFallback from "../PokemonLoading";
import SubmitPokemon from "../SubmitPokemon"
type PokemonInfoProps = {
  pokemonName: string;
};

const PokemonInfo: FC<PokemonInfoProps> = ({
  pokemonName,
}) => {
  const { data, error, status, run } = useAsync({
    status: pokemonName ? StatusType.PENDING : StatusType.IDLE,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (!pokemonName) return;
      run(getPoke(`${BASE_URL}/pokemon/${pokemonName}`));
  }, [pokemonName, run]);
  switch (status) {
    case "idle":
      return <SubmitPokemon />;
    case "pending":
      return <PokemonInfoFallback pokemonName={pokemonName}/>;
    case "error":
      throw error;
    case "resolved":
      return <PokemonDataView pokemonData={pokemonDataTransformer(data)} />;
    default:
      throw new Error("This should be impossible");
  }
};

export default PokemonInfo;
