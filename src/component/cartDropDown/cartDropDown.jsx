import { useDispatch, useSelector } from "react-redux";

//Component
import { Backdrop, Button, Divider, Paper, Typography } from "@mui/material";
import CartElement from "./cartDropDownELement";

//Styles
import { ActionOptions, styles } from "./utils";

//COnstants
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { getCartReducer } from "../../reducers/cart/cartSlice";

const Cart = ({ handleClose }) => {
  //States
  const { cart, total } = useSelector((state) => state.carts);
  const ref = useRef(true);
  //Helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Callbacks
  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      dispatch(getCartReducer());
    }
  }, [ref]);

  return (
    <Backdrop open={true} onClick={handleClose}>
      <Paper
        elevation={2}
        sx={styles.cart}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="header" style={styles.header}>
          <Typography variant="h6">Shopping Cart</Typography>
        </div>
        <Divider />
        <div className="main" style={styles.main}>
          {cart.map(({ title, price, count, image, id }, index) => (
            <CartElement
              key={index}
              name={title}
              image={image}
              price={price}
              count={count}
              id={id}
            />
          ))}
        </div>

        <div className="footer" style={styles.footer}>
          <div className="sub-total" style={styles.total}>
            <Typography>Sub Total</Typography>
            <Typography>{total}</Typography>
          </div>
          <Divider />
          <div className="action" style={styles.action}>
            {ActionOptions.map(({ name, path }) => (
              <Button
                size="small"
                sx={styles.actionButton}
                key={name}
                variant="outlined"
                onClick={() => {
                  handleClose();
                  path && navigate(path);
                }}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </Paper>
    </Backdrop>
  );
};
export default Cart;
