/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';

const Axios = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 300000,
});

const request = (config: AxiosRequestConfig) => {
  try {
    const token =
      sessionStorage.getItem('token') === null
        ? ''
        : sessionStorage.getItem('token');

    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.ContentType = 'application/json';
      //   config.headers['Content-Type'] = config?.fileUpload
      //     ? 'multipart/form-data'
      //     : 'application/json; charset=utf-8';
    }
  } catch (error: any) {
    throw Promise.reject(error);
  }

  return config;
};
Axios.interceptors.request.use(request);

export default Axios;
