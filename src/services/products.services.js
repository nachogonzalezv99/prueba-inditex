import { productsData } from "../data/products";

export const getAllProducts = () => {
  return productsData;
};

export const getSingleProduct = (id) => {
  return productsData.find((product) => product.id == id);
};

export const postProduct = (id, colorCode, storageCode) => {
  return;
};
