import { Box } from "@mui/material";

import { CartCard, CartTable } from "./components";
import { styles } from "./utils";

const Cart = () => {
  return (
    <Box sx={styles.box} className="cart">
      <CartTable />
      <CartCard />
    </Box>
  );
};
export default Cart;
