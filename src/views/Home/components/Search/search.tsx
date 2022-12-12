import { ChangeEventHandler, FC, useState } from "react";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
type PropTypes = {
  onSubmit: (a: string) => void;
};

const Search: FC<PropTypes> = ({
  onSubmit,
}) => {
  const [state, setState] = useState("")
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(state)
  }
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        search with pokemon name
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        value={state}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="click to search for your pokemon"
              onClick={handleSubmit}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="search with pokemon name"
      />
    </FormControl>
  );
};

export default Search;
