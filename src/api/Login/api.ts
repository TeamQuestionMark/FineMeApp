import { mainAxios } from '../shared/axios';
import { ResponseData, Token } from '../shared/type';
import { SOCIAL_LOGIN_RESPONSE, Social } from './types';

export const statusToResponseType = (status: number) => {
  switch (status) {
    case 200:
      return SOCIAL_LOGIN_RESPONSE.SUCCESS;
    case 201:
      return SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS;
    case 401:
      return SOCIAL_LOGIN_RESPONSE.INVALID_TOKEN;
    case 404:
      return SOCIAL_LOGIN_RESPONSE.FAILED;
    default:
      return SOCIAL_LOGIN_RESPONSE.UNKNOWN_ERROR
  }
}
export const postTokenReIssue = (params: Token) =>
  mainAxios.post<ResponseData<Token>>('/api/v1/auth/reissue', { params });

export const postSocialToken = async (social: Social, socialToken: string) => {
  return await mainAxios.post<ResponseData<Token>>(
    `/api/v1/auth/${social}?socialToken=${socialToken}`,
    undefined,
    { validateStatus: (status) => status < 500 },
  );
};
