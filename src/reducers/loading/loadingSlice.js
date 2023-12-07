import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: 0 };

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.loading += 1;
    },
    unsetLoading: (state) => {
      state.loading -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, unsetLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
