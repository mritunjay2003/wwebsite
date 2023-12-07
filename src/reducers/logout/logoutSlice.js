import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clear } from "../../utils/localStorage";

export const logout = createAsyncThunk("logout", async (_, { dispatch }) => {
  clear();
  dispatch({ type: "logout/LOGOUT" });
});

const logoutSlice = createSlice({
  name: "logout",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = logoutSlice.actions;

export default logoutSlice.reducer;
