import axios, { CanceledError } from 'axios';
import Cookies from "js-cookie";
import {TOKEN} from "../util/TOKEN.ts";

const apiClient =  axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
});

apiClient.interceptors.request.use(function (config) {
  config.headers.Authorization =  Cookies.get(TOKEN);
  console.log('hehe worked')
  return config;
}, function (error) {
  return Promise.reject(error);
});

export  default apiClient;

export { CanceledError };
