import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";


const reducerProxy = (state, action) => {
  if(action.type === 'logout/logout') {
    return reducers(undefined, action);
  }
  return reducers(state, action);
}
const store = configureStore({
  reducer: reducerProxy,
});

export default store;
