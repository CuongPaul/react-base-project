import axios from "axios";
import { toast } from "react-toastify";

import { ACCESS_TOKEN } from "../types";

interface RequestOptions {
  body?: any;
  query?: any;
  baseURL?: string;
  endpoint: string;
  isShowError?: boolean;
  headers?: Record<string, string>;
  method?: "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
}

const apiClient = async ({
  body,
  query,
  baseURL,
  headers,
  endpoint,
  method = "GET",
  isShowError = true,
}: RequestOptions) => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  const options: any = {
    method,
    url: endpoint,
    baseURL: baseURL || process.env.REACT_APP_API_BASE_URL,
    headers: headers || { "Content-Type": "application/json" },
  };

  if (body) options.data = body;
  if (query) options.params = query;
  if (token) options.headers = { ...options.headers, Authorization: token };

  const res = await axios(options).catch((err) => {
    isShowError && toast.error(err.message);

    throw new Error(err.message);
  });

  return res.data;
};

export default apiClient;
