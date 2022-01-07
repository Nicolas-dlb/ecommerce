/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
