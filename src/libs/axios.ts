import axios from "axios";
import { getCookie } from "cookies-next";

const axiosInstance = axios.create({
  baseURL:
    process.env.YOUAPP_TECHNICAL_TEST_API || "https://techtest.youapp.ai",
  withCredentials: false,
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
