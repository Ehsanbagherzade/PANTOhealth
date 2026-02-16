import axios, { AxiosResponse, AxiosError } from "axios";
import { API_CONFIG } from "../config-global";
import { errorToast } from "@/components/toast/toast";

const axiosInstance = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error("[API Error]", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
    });

    const errorData = error.response?.data as any;
    const errorMessage = errorData?.message || "Something went wrong";

    errorToast(errorMessage);

    return Promise.reject(errorData || { message: "Something went wrong" });
  },
);

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
};

export const checkResponseStatus = (response: AxiosResponse) => {
  if (response.data && response.data.status === false) {
    errorToast(response.data.message);
    return false;
  }
  return true;
};

export default axiosInstance;
