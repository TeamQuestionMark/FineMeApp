import STORAGE_KEY from '@/constants/storageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosInstance } from 'axios';
import { Token } from './type';

export const setTokenToAsyncStorage = async (token: Token) => {
  const item = await AsyncStorage.getItem(STORAGE_KEY.token);
  let newItem: Object;
  if (item) {
    const prev = JSON.parse(item) as any;
    if (prev && prev.state) {
      newItem = { ...prev, state: { ...prev.state, token } };
      AsyncStorage.setItem(STORAGE_KEY.token, JSON.stringify(newItem));
      return;
    }
  }

  console.error('🔸 → setTokenToAsyncStorage → item:', item);
  console.error('Failed to set token to AsyncStorage');
};

export const getTokenFromAsyncStorage = async () => {
  try {
    const item = await AsyncStorage.getItem(STORAGE_KEY.token);
    if (item) {
      const {
        state: { token },
      } = JSON.parse(item) as {
        state: { token: Token | null };
      };
      return token;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const setHeaderAuthorization = async (
  axios: AxiosInstance,
  token?: Token | null,
) => {
  const _token = token || (await getTokenFromAsyncStorage());
  if (_token) {
    axios.defaults.headers.common.authorization = `Bearer ${_token.accessToken}`;
  }
};

export const resetHeaderAuthorization = (axios: AxiosInstance) => {
  delete axios.defaults.headers.common.authorization;
};
