import axios from 'axios';
import { apiUrl, apiTimeout } from '@configs';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: apiTimeout,
});

export const httpClient = instance;
