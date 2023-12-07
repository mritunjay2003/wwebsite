import { useState } from "react";
import { useDispatch } from "react-redux";

//Components
import { Box, CardMedia, TableCell, TableRow, TextField } from "@mui/material";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";

//Styles
import { cartTableStyle } from "../utils/styles";

//Reducers
import {
  addCountCart,
  removeFromCartReducer,
} from "../../../reducers/cart/cartSlice";
import { setSnackBar } from "../../../reducers/snackBar/snackBar";

const CartRow = ({ row }) => {
  const [count, setCount] = useState(row.count);

  //Helpers
  const dispatch = useDispatch();

  const handleRemove = async (id) => {
    dispatch(removeFromCartReducer({ id }));
  };

  const handleSave = (id) => {
    dispatch(
      addCountCart({
        productId: id,
        count: Number(count),
      })
    );
    dispatch(setSnackBar({ message: "Product added successfully" }));
  };
  return (
    <TableRow key={row.id}>
      <TableCell sx={cartTableStyle.imageCell} scope="row">
        <CardMedia image={row.image} alt={"no"} sx={cartTableStyle.image} />
        {row.title}
      </TableCell>
      <TableCell sx={cartTableStyle.cell} align="right">
        {row.price}
      </TableCell>
      <TableCell sx={cartTableStyle.cell} align="right">
        <TextField
          sx={cartTableStyle.input}
          value={count !== 0 ? count : row.count}
          onChange={(event) => setCount(event.target.value)}
        />
      </TableCell>
      <TableCell sx={cartTableStyle.totalCell} align="right">
        {row.price * row.count}
      </TableCell>
      <TableCell sx={cartTableStyle.totalCell} align="right">
        <Box sx={cartTableStyle.actionCell}>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleSave(row.id)}
            icon={faFloppyDisk}
          />

          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(row.id)}
            icon={faTrash}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
};
export default CartRow;
