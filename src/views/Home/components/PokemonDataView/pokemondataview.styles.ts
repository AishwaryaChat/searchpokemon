import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: 50,
  },
  pokemonImageContainer: {
    display: "block",
    width: "60%",
    margin: "auto",
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  paper: {
    // position: "relative",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
  pokemonInfoContainer: {
    // position: "relative",
    // zIndex: -10
    padding: "20px 40px 40px 40px",
  },
  pokemonInfo: {
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pokemonName: {
    color: "#4F4A4A",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  stats: {
    color: "#4F4A4A",
    fontSize: "20px",
    minHeight: "200px",
  },
  statsTitle: {
    fontWeight: "bold",
  },
  verticalDivider: {
    borderRight: "1px solid #EDE3E3",
    height: 50,
    marginTop: -140
  },
});

export default useStyles;
