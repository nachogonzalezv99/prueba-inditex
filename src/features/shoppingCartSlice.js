import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getShoppingCartTotal,
  postShoppingCart,
} from "../services/shoppingCart.services";
export const postShoppingCartRedux = createAsyncThunk(
  "shoppingCart/postShoppingCartRedux",
  async ({ id, colorCode, storageCode }) => {
    const { data } = await postShoppingCart(id, colorCode, storageCode);
    return data;
  }
);

export const getShoppingCartTotalRedux = createAsyncThunk(
  "shoppingCart/getShoppingCartTotalRedux",
  async () => {
    const { data } = await getShoppingCartTotal();
    return data;
  }
);

const STORAGE_KEY = "shopping-cart-total";

const initialState = {
  total: 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(postShoppingCartRedux.fulfilled, (state, action) => {
      state.total = action.payload.total;
    });
    builder.addCase(getShoppingCartTotalRedux.fulfilled, (state, action) => {
      state.total = action.payload.total;
    });
  },
});

export default shoppingCartSlice.reducer;
