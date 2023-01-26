import axios from "axios";

const baseUrl = "http://localhost:3500/";

export const getShoppingCartTotal = async () => {
  const endpoint = "cart";
  return axios.get(baseUrl + endpoint);
};

export const postShoppingCart = async (id, colorCode, storageCode) => {
  const endpoint = "cart";
  return axios.post(baseUrl + endpoint, { id, colorCode, storageCode });
};
