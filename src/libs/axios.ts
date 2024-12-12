import axios from "axios";
import { getCookie } from "cookies-next";

const axiosInstance = axios.create({
  baseURL: process.env.YOUAPP_TECHNICAL_TEST_API || "http://techtest.youapp.ai",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getCookie("access_token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
