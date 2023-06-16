import { AxiosError, AxiosInstance } from "axios";

import { Token } from "./type";
import { includes } from "lodash";
import { useUserStore } from "@/store/user";
import { setHeaderAuthorization } from "./header";
import { postTokenReIssue } from "../Login/api";

let isRefreshing = false;
let failedQueue: { resolve: (token: Token | null) => void; reject: (error: Error) => void }[] = [];

const processQueue = (error: Error | null, token: Token | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const setDefaultInterceptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    (config) => {
      const newConfig = { ...config };
      if (config.params) {
        newConfig.params = config.params;
      }
      if (config.data) {
        newConfig.data = config.data;
      }
      return newConfig;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const status = error?.response?.status || error?.status;
      if (includes(originalRequest?.url, '/auth/reissue')) {
        return Promise.reject(error.response || error);
      }

      if (status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise(
            (resolve: (token: Token | null) => void, reject: (error: Error) => void) => {
              failedQueue.push({ resolve, reject });
            },
          )
            .then((token) => {
              originalRequest.headers.authorization = `Bearer ${token?.accessToken}`;
              return axios(originalRequest);
            })
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const { token } = useUserStore.getState();

        try {
          setHeaderAuthorization(axios, token?.accessToken);
          
          const response = await postTokenReIssue(token);
          const newAccessToken = response?.data?.accessToken;

          if (newAccessToken) {
            useUserStore.setState({ token: response?.data });
            setHeaderAuthorization(axios ,newAccessToken);
            originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
            processQueue(null, response?.data?.data);
            return await axios(originalRequest);
          }
          return await Promise.reject(new Error(`unable to refresh access token: ${response}`));
        } catch (reIssueError) {
          if (reIssueError instanceof AxiosError) {
            // 센트리 에러 부여
            processQueue(reIssueError, null);
          }
          //TOTO: response 값에 따라 변경
          return await Promise.reject(error.response);
        } finally {
          isRefreshing = false;
        }
      }
      return Promise.reject(error.response || error);
    },
  );
};
