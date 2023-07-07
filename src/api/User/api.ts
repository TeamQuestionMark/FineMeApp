import { mainAxios } from '../shared/axios';
import { ResponseData } from '../shared/type';
import { Gender, UserProfile } from './types';

export const getProfile = () =>
  mainAxios.get<ResponseData<UserProfile>>('/api/v1/user/profile');

type PutProfilePayload = {
  gender: Gender;
  birth: string;
};
export const putProfile = async (payload: PutProfilePayload) => {
  const { data } = await mainAxios.put<ResponseData<unknown>>(
    '/api/v1/user/profile/info',
    payload,
  );
  return data;
};

type PutFCMTokenPayload = {};
export const putFCMToken = async (payload: PutFCMTokenPayload) => {
  const { data } = await mainAxios.put<ResponseData<unknown>>(
    '/api/v1/user/profile/fcm-id',
    payload,
  );
  return data;
};
