import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProduct } from "../services/products.services";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/localstorage.utility";

export const postProductRedux = createAsyncThunk(
  "shoppingCart/addProduct",
  async ({ id, colorCode, storageCode }) => {
    const {data} = await postProduct(id, colorCode, storageCode);
    return data
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
      console.log(action.payload)
      state.total += 1;
      setLocalStorage(STORAGE_KEY, state.total, 5000);
    });
  },
});

export default shoppingCartSlice.reducer;
