import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Services
import { getProducts } from "../../services/product/get";

//Reducer
import { setLoading, unsetLoading } from "../loading/loadingSlice";

const initialState = [];

export const getProductsReducer = createAsyncThunk(
  "GET/products",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading());
      const result = await getProducts();
      dispatch(unsetLoading());
      return result.data;
    } catch (error) {
      dispatch(unsetLoading());
      return [];
    }
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsReducer.fulfilled, (state, { payload }) => {
      state.push(...payload);
    });
  },
});

// Action creators are generated for each case reducer function
// export const { } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
