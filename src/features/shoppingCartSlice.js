import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getShoppingCartTotal,
  postShoppingCart,
} from "../services/shoppingCart.services";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/localstorage.utility";

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
  total: getLocalStorage(STORAGE_KEY) ? getLocalStorage(STORAGE_KEY) : 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(postShoppingCartRedux.fulfilled, (state, action) => {
      state.total = action.payload.total;
      setLocalStorage(STORAGE_KEY, state.total, 5000);
    });
    builder.addCase(getShoppingCartTotalRedux.fulfilled, (state, action) => {
      state.total = action.payload.total;
      setLocalStorage(STORAGE_KEY, state.total, 5000);
    });
  },
});

export default shoppingCartSlice.reducer;
