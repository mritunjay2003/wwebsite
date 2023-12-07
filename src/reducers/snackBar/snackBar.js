import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackBar: {
    message: "",
    variant: "",
    open: false,
    severity: "success",
  },
};

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState: initialState,
  reducers: {
    setSnackBar: (state, action) => {
      state.snackBar = { ...action.payload, open: true };
    },
    closeSnackBar: (state) => {
      state.snackBar = { ...initialState.snackBar, open: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSnackBar, closeSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;
