import { TextField, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const NumberTextField = ({ value, style, handleChange }) => {
  const handleIncrement = () => {
    handleChange((prevNumber) => prevNumber + 1);
  };

  const handleDecrement = () => {
    handleChange((prevNumber) => prevNumber - 1);
  };

  return (
    <TextField
      type="tel"
      value={value}
      onChange={(e) => handleChange(Number(e.target.value))}
      inputProps={{
        min: 0, // Set the minimum allowed value
        max: 100, // Set the maximum allowed value
        style: { textAlign: "center" }, // Center the text inside the input field
      }}
      sx={style}
      InputProps={{
        startAdornment: (
          <IconButton onClick={handleDecrement} edge="start" aria-label="minus">
            <FontAwesomeIcon icon={faMinus} />
          </IconButton>
        ),
        endAdornment: (
          <IconButton onClick={handleIncrement} edge="end" aria-label="plus">
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
        ),
      }}
    />
  );
};

export default NumberTextField;
