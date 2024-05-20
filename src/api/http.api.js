import axios from 'axios';
import { readToken } from '@app/services/localStorage.service';
import { ApiError } from '@app/api/ApiError';
import CONSTANTS from '@app/constants/constant';

export const httpApi = axios.create({
  baseURL: CONSTANTS.API_ENDPOINT.BASE_URL_LOCAL,
  withCredentials: true,
});

console.log('process.env.REACT_APP_BASE_URL', CONSTANTS.API_ENDPOINT.BASE_URL_LOCAL);

httpApi.interceptors.request.use((config) => {
  console.log('config headers', config.headers);
  config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };

  return config;
});

httpApi.interceptors.response.use(undefined, (error) => {
  throw new ApiError(error.response?.data.message || error.message, error.response?.data);
});
