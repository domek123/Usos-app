import axios, { type AxiosInstance, type AxiosResponse } from "axios";

type ApiInstance = {
  get<T = unknown>(url: string, config?: unknown): Promise<T>;
  post<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>;
  put<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>;
  patch<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>;
  delete<T = unknown>(url: string, config?: unknown): Promise<T>;
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: false,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (err) => {
    console.error("Błąd API:", err);
    return Promise.reject(err);
  }
);

export const api = axiosInstance as ApiInstance;
