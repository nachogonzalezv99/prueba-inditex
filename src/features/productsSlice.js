import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../services/products.services";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/localstorage.utility";

export const getProductsRedux = createAsyncThunk(
  "products/addProduct",
  async () => {
    if (getLocalStorage(STORAGE_KEY)) {
      return getLocalStorage(STORAGE_KEY);
    } else {
      const { data } = await getAllProducts();
      setLocalStorage(STORAGE_KEY, data, EXPIRATION_TIME);
      return data;
    }
  }
);

const STORAGE_KEY = "products";
const EXPIRATION_TIME = 1;

const initialState = {
  products: [],
  isLoading: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductsRedux.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsRedux.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
