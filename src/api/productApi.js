import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = "/db";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/data/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
