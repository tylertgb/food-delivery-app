// src/utils/api.js
import axios from "axios";
const token = localStorage.getItem("authToken");

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:9000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer GH₵{token}`,
  },
  timeout: 10000,
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer GH₵{token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
