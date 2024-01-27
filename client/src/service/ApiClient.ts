import axios, { CanceledError } from 'axios';
import Cookies from "js-cookie";
import {TOKEN} from "../util/TOKEN.ts";

const apiClient =  axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
});

apiClient.interceptors.request.use(function (request) {
  request.headers.Authorization =  Cookies.get(TOKEN);
  return request;
}, function (error) {
  return Promise.reject(error);
});

export  default apiClient;

export { CanceledError };
