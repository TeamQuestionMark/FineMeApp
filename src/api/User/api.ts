import { mainAxios } from '../shared/axios';
import { ResponseData } from '../shared/type';
import { Gender, UserProfile } from './types';
import messaging from '@react-native-firebase/messaging';

// {"data": {"birth": "", "gender": "female", "nickname": "공부하는 파이니", "socialType": "KAKAO", "username": "gkdud7873@naver.com"}}
export const getProfile = () =>
  mainAxios.get<ResponseData<UserProfile>>('/api/v1/user/profile');

type PutProfilePayload = {
  gender: Gender | null;
  birth: Date | null; //19900101
};

const formatBirth = (birthDate: Date) => {
  const year = birthDate.getFullYear();

  const month = birthDate.getMonth() + 1;
  const monthStr = month < 10 ? '0' + month : month;

  const date = birthDate.getDate();
  const dateStr = date < 10 ? '0' + date : date;

  return `${year}${monthStr}${dateStr}`;
};
export const putProfile = async (payload: PutProfilePayload) => {
  const { data } = await mainAxios.put<ResponseData<unknown>>(
    '/api/v1/user/profile/info',
    {
      gender: payload.gender,
      birth: payload.birth ? formatBirth(payload.birth) : null,
    },
  );
  return data;
};

type PutFCMTokenPayload = {
  fcmId: string;
};
export const putFCMToken = async (payload: PutFCMTokenPayload) => {
  const { data } = await mainAxios.put<ResponseData<unknown>>(
    '/api/v1/user/profile/fcm-id',
    payload,
  );
  return data;
};

export const deleteFCMToken = async () => {
  return await mainAxios
    .put<ResponseData<unknown>>('/api/v1/user/profile/fcm-id', { fcmId: null })
    .then(() => messaging().deleteToken());
};

export const putNickname = async (nickname: string) => {
  const { data } = await mainAxios.put<ResponseData<unknown>>(
    '/api/v1/user/profile/nickname',
    { nickname: nickname.trim() },
  );
  return data;
};

export const deleteUser = async () => {
  return await mainAxios
    .delete('/api/v1/user/profile')
    .then(() => messaging().deleteToken());
};
