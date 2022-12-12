export const pokemonDataTransformer = (pokemonData: any) => {
  console.log("pokemonData", pokemonData);
  const {
    abilities: pokemonAbilitites,
    stats: pokemonStats,
    held_items,
    species: { name },
    sprites: {
      other: {
        "official-artwork": { front_default: url },
      },
    },
  } = pokemonData;
  let abilities = pokemonAbilitites.map((ability: any, id: number) => ({
    id,
    name: ability.ability.name,
  }));

  let stats = pokemonStats.map((stat: any, id: number) => ({
    id,
    name: stat.stat.name,
    value: `${stat.effort}/${stat.base_stat}`,
  }));

  let heldItems = held_items.map((item: any, id: number) => ({
    name: item.item.name,
    id,
  }));
  return {
    name,
    image: url,
    abilities,
    stats,
    heldItems,
  };
};
