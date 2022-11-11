import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { baseURL, headers } from '@/networking/config';
import { resInterceptor } from '@/networking/interceptors';

export class NetworkService {
  constructor() {
    this.client = applyCaseMiddleware(axios.create({ baseURL, headers }));
    this.client.interceptors.response.use(resInterceptor.onFulfill, resInterceptor.onReject);
  }

  //todas las llamdas le pone el token
  setAccessToken(token) {
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  //cada logout
  clearAccessToken() {
    delete this.client.defaults.headers.common.authorization;
  }

  request({ method, url, data, ...config }) {
    return this.client.request({ method, url, data, ...config });
  }
}

export const networkService = new NetworkService();
