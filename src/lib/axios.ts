import axios from 'axios';
import { BASE_URL } from './environment';

const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: 'Bearer ' + TOKEN,
  },
});
