import { AxiosResponse } from 'axios';

export interface Token {
  accessToken: string;
  refreshToken: string;
  grantType: string;
}

export interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

export type ApiPostFunction<D, R = Promise<AxiosResponse>> = (
  data: D,
) => Promise<R>;

export type ApiFetchFunction<R, Params = object> = ({
  pageSize,
  searchQuery,
}: {
  pageSize?: number;
  searchQuery?: string;
} & Params) => Promise<R>;
