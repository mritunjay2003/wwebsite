import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Reducer
import { setLoading, unsetLoading } from "../loading/loadingSlice";

//Services
import { getCartProductsByUserId } from "../../services/cart/get";
import { removeFromCart } from "../../services/cart/remove";
import { setSnackBar } from "../snackBar/snackBar";
import { updateCountOfCartProduct } from "../../services/cart/add";

const initialState = {
  cart: [],
  total: 0,
};

export const getCartReducer = createAsyncThunk(
  "GET/cart",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading());
      const response = await getCartProductsByUserId();

      dispatch(unsetLoading());
      return {
        cartProducts: response.data.cartProducts,
        total: response.data.total,
      };
    } catch (error) {
      dispatch(unsetLoading());
      console.log(error);
    }
  }
);

export const removeFromCartReducer = createAsyncThunk(
  "REMOVE/cart",
  async ({ id }, { dispatch }) => {
    try {
      dispatch(setLoading());
      await removeFromCart(id);
      dispatch(getCartReducer());
      dispatch(unsetLoading());
      dispatch(
        setSnackBar({ message: "Deleted successfully", severity: "error" })
      );
      return true;
    } catch (error) {
      dispatch(unsetLoading());
      console.log(error);
      return false;
    }
  }
);

export const addCountCart = createAsyncThunk(
  "REMOVE/cart",
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading());
      await updateCountOfCartProduct(data);
      dispatch(getCartReducer());
      dispatch(unsetLoading());
      dispatch(setSnackBar({ message: "Count updated successfully" }));
      return true;
    } catch (error) {
      dispatch(unsetLoading());
      console.log(error);
      return false;
    }
  }
);

const cartSlice = createSlice({
  name: "cartDetails",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image, count } = action.payload;

      state.total = +(state.total + price * (count ? count : 1)).toFixed(2);

      const isExist = state.cart.find((data) => data.id === id);
      if (isExist) {
        state.cart.map((data) => {
          if (data.id === id) {
            data.count += count ? count : 1;
          }
          return data;
        });
        return;
      }

      state.cart.push({
        id,
        name: title,
        price,
        image,
        count: count ? count : 1,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartReducer.fulfilled, (state, { payload }) => {
        state.cart = payload.cartProducts;
        state.total = payload.total;
      })
      .addCase(removeFromCartReducer.fulfilled, () => {});
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
