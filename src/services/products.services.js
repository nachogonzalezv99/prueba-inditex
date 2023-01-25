import { productsData } from "../data/products";
import axios from "axios";

const baseUrl = "http://localhost:3500/";

export const getAllProducts = () => {
  const endpoint = "products";
  return axios.get(baseUrl + endpoint);
};

export const getSingleProduct = (id) => {
  const endpoint = `product/${id}`;
  /* return axios.get(baseUrl + endpoint); */
  return productsData.find((product) => product.id == id);
};

export const postProduct = (id, colorCode, storageCode) => {
  const endpoint = "cart";
  return axios.post(baseUrl + endpoint, { id, colorCode, storageCode });
  return;
};
