import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Services
import { getProductById } from "../../services/product/get";

//Reducer
import { setLoading, unsetLoading } from "../loading/loadingSlice";

const initialState = {
  data: {},
};

export const getProductByIdReducer = createAsyncThunk(
  "GET/product/byId",
  async (id, { dispatch }) => {
    try {
      dispatch(setLoading());
      const result = await getProductById(id);
      dispatch(unsetLoading());
      return result.data;
    } catch (error) {
      dispatch(unsetLoading());
      return {};
    }
  }
);

const singleProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductByIdReducer.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = singleProductDetailsSlice.actions;

export default singleProductDetailsSlice.reducer;
