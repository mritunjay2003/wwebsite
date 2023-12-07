import { useSelector } from "react-redux";

//Component
import { Box, Button, Paper, Typography } from "@mui/material";

//Styles
import { cartCardStyle } from "../utils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";

const CartCard = () => {
  //States
  const total = useSelector((state) => state.carts.total);


  //Helpers
  const navigation = useNavigate();

  return (
    <Paper sx={cartCardStyle.main}>
      <Typography variant="h4" textAlign={"center"}>
        Cart Totals
      </Typography>
      <Box className="details">
        <Box sx={cartCardStyle.box} className="sub-total">
          <Typography sx={cartCardStyle.text} variant="subtitle1">
            Sub Total
          </Typography>
          <Typography sx={cartCardStyle.text} variant="subtitle1">
            {total}
          </Typography>
        </Box>
        <Box sx={cartCardStyle.box} className="total">
          <Typography sx={cartCardStyle.text} variant="subtitle1">
            Total
          </Typography>
          <Typography sx={cartCardStyle.total} variant="subtitle1">
            {total}
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" onClick={()=>navigation(`${ROUTES.HOME}${ROUTES.CHECKOUT}`)} sx={cartCardStyle.checkout}>
        Check Out
      </Button>
    </Paper>
  );
};

export default CartCard;
