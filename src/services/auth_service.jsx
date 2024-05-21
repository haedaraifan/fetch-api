import axios from "axios";

const loginUser = async ({ name, password }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const response = await axios.post(
    `${baseUrl}/api/login`,
    {
      name: name,
      password: password,
    },
    {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    }
  );

  return response.data;
};

export { loginUser };
