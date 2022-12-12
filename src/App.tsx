import Home from "./views/Home/home"
import useStyles from "./App.styles"
function App() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Home />
    </div>
  );
}

export default App;
