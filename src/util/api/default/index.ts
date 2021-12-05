import axios from "axios";

export const BASE_URL = "http://13.124.218.77:8080/api";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      withCredentials: "true",
    },
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: "json" | "blob" | "text" = "json"
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: "true",
    },
    responseType: type,
    withCredentials: true,
  });
  return request;
};
