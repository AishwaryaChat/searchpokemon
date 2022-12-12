import useStyles from "./pokemondataview.styles";
import { Paper } from "@mui/material";
type PokemonDataType = {
  name: string;
  image: string;
  abilities?: {
    name: string;
    id: number;
  }[];
  stats?: {
    name: string;
    value: string;
    id: number;
  }[];
  heldItems?: {
    name: string;
    id: number;
  }[];
};

type PropTypes = {
  pokemonData: PokemonDataType;
};

const PokemonDataViewComponent = ({ pokemonData }: PropTypes) => {
  const classes = useStyles();
  const { name, image, abilities, stats, heldItems } = pokemonData;
  return (
    <div className={classes.container}>
      {/* Since the image urls are not being loaded so I have served these image files from local */}
      <div className={classes.pokemonImageContainer}>
        <img
          src={`/img//${name}.jpg`}
          alt={name}
          className={classes.pokemonImage}
        />
      </div>
      <div>
        <Paper sx={{ flexGrow: 1 }} className={classes.paper}>
          <div className={classes.pokemonInfoContainer}>
            <div className={classes.pokemonName}>{name}</div>
            <div className={classes.pokemonInfo}>
              <div className={classes.stats}>
                <div className={classes.statsTitle}>Abilities</div>
                {abilities &&
                  abilities.length > 0 &&
                  abilities.map(({ name, id }) => <div key={id}>{name}</div>)}
              </div>
              <div className={classes.verticalDivider} />
              <div className={classes.stats}>
                <div className={classes.statsTitle}>Stats</div>
                {stats &&
                  stats.length > 0 &&
                  stats.map(({ name, id, value }) => (
                    <div key={id}>
                      {name}: {value}
                    </div>
                  ))}
              </div>
              <div className={classes.verticalDivider} />
              <div className={classes.stats}>
                <div className={classes.statsTitle}>Held Items</div>
                {heldItems &&
                  heldItems.length > 0 &&
                  heldItems.map(({ name, id }) => <div key={id}>{name}</div>)}
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default PokemonDataViewComponent;
