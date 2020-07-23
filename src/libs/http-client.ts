import axios from 'axios';
import { apiUrl, apiTimeout } from '@configs';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: apiTimeout,
  transformResponse: (res: any) => JSON.parse(res).data,
});

export const httpClient = instance;
