import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice";
import shoppingCartSlice from "../features/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    poducts: productsSlice,
  },
});
