export const pokemonDataTransformer = (pokemonData: any) => {
  const {
    species: { name },
    sprites: {
      other: {
        "official-artwork": { front_default: url },
      },
    },
  } = pokemonData;
  return {
    name,
    image: url,
  };
};
