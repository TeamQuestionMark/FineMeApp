export enum SOCIAL_LOGIN_RESPONSE {
  FIRST_LOGIN_SUCCESS,
  SUCCESS,
  INVALID_TOKEN,
  FAILED,
  UNKNOWN_ERROR
}

export type Social = 'kakao' | 'apple'