import axios from "axios";

const baseUrl = "http://localhost:3500/";

export const getAllProducts = async() => {
  const endpoint = "products";
  return axios.get(baseUrl + endpoint);
};

export const getSingleProduct = async (id) => {
  const endpoint = `products/${id}`;
  return axios.get(baseUrl + endpoint);
};
