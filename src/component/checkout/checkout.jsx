import { useForm } from "react-hook-form";

//Components
import { Box } from "@mui/material";
import { BillingCard, BillingFrom } from "./components";

//Styles
import { styles } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../services/order/create";
import { setSnackBar } from "../../reducers/snackBar/snackBar";

const Cart = () => {
  //States
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      email: "",
      phoneNo: "",
    },
  });
  const { cart, total } = useSelector((state) => state.carts);

  //Helpers
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const productsId = cart.map(({ id }) => id);
      await createOrder({ productsId, address: data });
      dispatch(setSnackBar({ message: "Order created successfully" }));
    } catch (error) {
      dispatch(
        setSnackBar({ message: "Please try again later", severity: "error" })
      );
    }
  };

  return (
    <Box
      sx={styles.box}
      component={"form"}
      className="billing"
      onSubmit={handleSubmit(onSubmit)}
    >
      <BillingFrom control={control} errors={errors} />
      <BillingCard cart={cart} total={total} />
    </Box>
  );
};
export default Cart;
