import { AxiosInstance } from "axios";


export const setHeaderAuthorization = (axios: AxiosInstance, accessToken: string) => {
  axios.defaults.headers.common.authorization = `Bearer ${accessToken}`;
};

export const resetHeaderAuthorization = (axios: AxiosInstance) => {
  delete axios.defaults.headers.common.authorization;
};

