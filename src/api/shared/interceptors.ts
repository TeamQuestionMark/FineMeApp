import { AxiosInstance } from 'axios';

import { getTokenFromAsyncStorage, setTokenToAsyncStorage } from './header';
import { postTokenReIssue } from '../Login/api';
import { Token } from './type';

let lock = false;
let subscribers: ((accessToken: string) => void)[] = [];

async function onRrefreshed(token: Token) {
  await setTokenToAsyncStorage(token);
  subscribers.forEach(cb => cb(token.accessToken));
}

export const setDefaultInterceptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    async config => {
      const newConfig = { ...config };

      const token = await getTokenFromAsyncStorage();
      if (token) {
        newConfig.headers.setAuthorization(`Bearer ${token.accessToken}`);
      }

      return newConfig;
    },
    error => Promise.reject(error),
  );

  axios.interceptors.response.use(
    response => response,
    async error => {
      const {
        config,
        response: { status },
      } = error;
      const originalRequest = config;

      if (config.url.includes('/auth/') || status !== 401 || config._retry)
        return Promise.reject(error);

      console.log('[interceptors]', config.url, 'refresh token...');

      const token = await getTokenFromAsyncStorage();
      if (token) {
        if (lock) {
          return new Promise(resolve => {
            subscribers.push((accessToken: string) => {
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              originalRequest._retry = true;
              resolve(axios(originalRequest));
            });
          });
        }
        lock = true;
        const reissued = await postTokenReIssue(token);
        onRrefreshed(reissued).then(() => {
          lock = false;
          subscribers = [];
        });

        config.headers.Authorization = `Bearer ${reissued.accessToken}`;
        console.log('[interceptors]', 'succeed to refresh token');

        return axios(config);
      }

      return Promise.reject(error);
    },
  );
};
