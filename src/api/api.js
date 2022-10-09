import axios from "axios";
import { getToken } from "../utils/localStorage";

export const api = axios.create({
  baseURL: "/api",
});

export const authApi = axios.create({
  baseURL: "/api",
});

authApi.interceptors.request.use(function (config) {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Basic ${getToken()}`,
    },
  };
});
