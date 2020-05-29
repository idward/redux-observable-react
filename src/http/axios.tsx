import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from '../store';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

http.interceptors.request.use(
  (request: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    console.log(request);
    console.log('state:', store.getState());
    return request;
  },
  error => {
    console.log(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
  },
);

export default http;
