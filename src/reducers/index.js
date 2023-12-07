import { combineReducers } from "@reduxjs/toolkit";

import { productDetailsSlice } from "./productDetails";
import { cartSlice } from "./cart";
import { snackBarSlice } from "./snackBar";
import { loadingSlice } from "./loading";
import { userSlice } from "./user";
import { singleProductDetailsSlice } from "./singleProduct";

export default combineReducers({
  products: productDetailsSlice,
  carts: cartSlice,
  snackBar: snackBarSlice,
  loading: loadingSlice,
  user: userSlice,
  singleProduct: singleProductDetailsSlice,
});
