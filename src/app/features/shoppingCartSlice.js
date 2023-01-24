import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProduct } from "../../services/products.services";

export const postProductRedux = createAsyncThunk(
  "shoppingCart/addProduct",
  async ({ id, colorCode, storageCode }) => {
    return postProduct(id, colorCode, storageCode);
  }
);

const initialState = {
  total: 1,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postProductRedux.fulfilled, (state, action) => {
      state.total ++ 
    });
  },
});

export const { increment } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;