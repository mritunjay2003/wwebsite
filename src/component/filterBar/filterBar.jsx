import { faGrip, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const FilterBar = ({ low, high, total, show, handleSortBy, handleShow }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        backgroundColor: "#F9F1E7",
        alignItems: "center",
        padding: 1,
      }}
      className="filter-bar"
    >
      <div
        className="options-1"
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          sx={{ color: "#000" }}
          startIcon={<FontAwesomeIcon icon={faSliders} />}
        >
          Filter
        </Button>
        <FontAwesomeIcon icon={faGrip} />
        <Divider
          orientation="vertical"
          sx={{ height: "30px", borderColor: "black" }}
        />
        <Typography>{`Showing ${low}–${high} of ${total} results`}</Typography>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 4 }}
        className="options-2"
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
          className="action-1"
        >
          <Typography>Show</Typography>
          <TextField
            InputProps={{ style: { padding: 1 } }}
            sx={{
              width: "60px",
              backgroundColor: "#fff",
              "& .MuiInputBase-input": {
                padding: "8px 16px",
              },
            }}
            onChange={handleShow}
            value={show}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
          className="action-2"
        >
          <Typography>Short By</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={""}
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleSortBy}
              sx={{
                backgroundColor: "#fff",
                "& .MuiSelect-select": {
                  padding: "8px 16px",
                },
              }}
            >
              <MenuItem value={""}>
                <em>All</em>
              </MenuItem>
              <MenuItem value={"low"}>low to high</MenuItem>
              <MenuItem value={"high"}>high to low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
export default FilterBar;
