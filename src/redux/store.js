import { configureStore } from "@reduxjs/toolkit";
import roll from "./slices/rollSlice";
import cart from "./slices/cartSlice";
import filters from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    roll,
    cart,
    filters,
  },
});
