import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProduct } from "../../services/products.services";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/localstorage.utility";

export const postProductRedux = createAsyncThunk(
  "shoppingCart/addProduct",
  async ({ id, colorCode, storageCode }) => {
    return postProduct(id, colorCode, storageCode);
  }
);

const STORAGE_KEY = "shopping-cart-total";

const initialState = {
  total: getLocalStorage(STORAGE_KEY)
    ? JSON.parse(getLocalStorage(STORAGE_KEY))
    : 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(postProductRedux.fulfilled, (state, action) => {
      state.total += 1;
      setLocalStorage(STORAGE_KEY, state.total);
    });
  },
});

export const { increment } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
