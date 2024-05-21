import React, { useState } from "react";
import SideBar from "../components/sidebar";
import { loginUser } from "../services/auth_service";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prefData) => ({
      ...prefData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setLoading(true);
      const result = await loginUser(formData);
      localStorage.setItem("token", result.data.token)
      setSuccess(true);

    } catch(e) {

      console.log(e);
      setSuccess(false)
      setError(e.response.data.error);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mb-4">Login success!</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              {isLoading ? (
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage