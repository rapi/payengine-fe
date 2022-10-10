import { authApi } from "./api";

export const createTransaction = (data) => authApi.post("/transaction", data);
