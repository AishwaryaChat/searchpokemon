import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: 300,
    height: 300,
    align: "center",
    display: "flex",
  },
});

function SubmitPokemon() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <div>Submit a pokemon</div>
    </Paper>
  );
}

export default SubmitPokemon;
