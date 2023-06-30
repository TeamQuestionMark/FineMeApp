export interface Token { 
  accessToken: string; 
  refreshToken: string;
  grantType: string;
};


export interface ResponseData<T> {
  code: number,
  data: T,
  message: string
}