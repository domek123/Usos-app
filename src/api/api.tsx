import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

type ApiInstance = {
  get<T = unknown>(url: string, config?: unknown): Promise<T>;
  post<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>;
  put<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>;
  patch<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>;
  delete<T = unknown>(url: string, config?: unknown): Promise<T>;
};

export const getAuthToken = (): string | null => {
  try {
    const serializedState = localStorage.getItem("user-store");
    if (serializedState) {
      const state = JSON.parse(serializedState);
      return state.state.token || null;
    }
  } catch (e) {
    console.error("Nie udało się odczytać tokenu z localStorage:", e);
  }
  return null;
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (err) => {
    console.error("Błąd API:", err);
    return Promise.reject(err);
  }
);

export const api = axiosInstance as ApiInstance;
