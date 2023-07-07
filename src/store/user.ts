import { postSocialToken, statusToResponseType } from '@/api/Login/api';
import { SOCIAL_LOGIN_RESPONSE } from '@/api/Login/types';
import { getProfile } from '@/api/User/api';
import { UserProfile } from '@/api/User/types';
import { Token } from '@/api/shared/type';
import STORAGE_KEY from '@/constants/storageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface UserStore {
  token: Token | null;
  user: UserProfile | null;
  reset: () => void;
  socialLogin: (social: 'kakao' | 'apple', socialToken: string) => Promise<SOCIAL_LOGIN_RESPONSE>;
  getUser: () => Promise<UserProfile | null>
}

const initialStore = {
  token: null,
  user: null
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        token: null,
        user: null,
        reset: () => {
          set(initialStore)
        }, 
        getUser: async () => {
          try {
            const {status, data} = await getProfile()
            console.log('🔸 → getUser: → data:', data);
            const user = data.data
            set((prev) => ({...prev, user}))
            return user
          } catch(e) {
            console.log('🔸 → getUser: → e:', e);
            set({token: null, user: null})
            return null
          }
        },
        socialLogin: async (social: 'kakao' | 'apple', socialToken: string) => {
          const { status, data } = await postSocialToken(social, socialToken);
          const token = data.data;
          const type = statusToResponseType(status);

          if (
            type === SOCIAL_LOGIN_RESPONSE.SUCCESS ||
            type === SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS
          ) {
            set({ token });
          } else {
            console.error(`postSocialToken ${status} Error:`, data.message);
          }
          return type;
        },
      }),
      {
        name: STORAGE_KEY.token,
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
