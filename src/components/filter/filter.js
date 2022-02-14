import { TextField } from "@mui/material";
import "./filter.scss";

const Filter = ({ handleChange }) => {
  return (
    <TextField
      id="filter-id"
      label="Enter ID"
      variant="outlined"
      className="group__input"
      onChange={(event) => handleChange(event.target.value)}
    />
  );
};

export default Filter;
