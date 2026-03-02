import axios from "axios";

/* ================= BASE URL ================= */

export const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/* ================= IMAGE URL ================= */

export const IMAGE_URL =
  import.meta.env.VITE_IMAGE_URL || "http://localhost:5000";

/* ================= AXIOS INSTANCE ================= */

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

/* ================= REQUEST INTERCEPTOR ================= */

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= RESPONSE INTERCEPTOR ================= */

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API ERROR:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API;