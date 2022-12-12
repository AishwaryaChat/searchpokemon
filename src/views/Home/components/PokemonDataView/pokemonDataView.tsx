type PokemonDataType = {
  name: string;
  image: string;
};

type PropTypes = {
  pokemonData: PokemonDataType;
};

const ResultsComponent = ({ pokemonData }: PropTypes) => {
  const { name, image } = pokemonData;
  return (
    <div>
      <img src={image} alt={name} style={{ width: 100, height: 100 }} />
    </div>
  );
};

export default ResultsComponent;
