import axios from "axios";

const getAllProduct = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const response = await axios.get(`${baseUrl}/api/products`, {
    headers: {
      AUTHORIZATION: token,
      "ngrok-skip-browser-warning": true
    },
  });

  return response.data;
};

const postNewProduct = async (formData) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const response = await axios.post(`${baseUrl}/api/products`, formData, {
    headers: {
      AUTHORIZATION: token,
      "Content-Type": "multipart/form-data",
      "ngrok-skip-browser-warning": true
    },
  });

  return response.data;
};

export { getAllProduct, postNewProduct };
