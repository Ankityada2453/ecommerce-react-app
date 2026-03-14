import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const res = await axios.get(`${BASE_URL}?limit=100`);
  return res.data.products;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};