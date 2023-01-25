import axios from "axios";

const baseUrl = "http://localhost:3500/";

export const getAllProducts = () => {
  const endpoint = "products";
  return axios.get(baseUrl + endpoint);
};

export const getSingleProduct = (id) => {
  const endpoint = `products/${id}`;
  return axios.get(baseUrl + endpoint);
};
