import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Services
import login from "../../services/auth/login";

//Helpers
import { getItem, setItem } from "../../utils/localStorage";
import { setLoading, unsetLoading } from "../loading/loadingSlice";

const initialState = {
  user: JSON.parse(getItem("user")),
};

export const loginReducer = createAsyncThunk(
  "login",
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading());
      const result = await login(data);
      setItem("token", result.data.token);
      setItem("user", JSON.stringify(result.data.user));
      dispatch(unsetLoading());
      return result.data;
    } catch (error) {
      console.log(error);
      dispatch(unsetLoading());
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginReducer.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions;

export default userSlice.reducer;
