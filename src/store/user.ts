import { Token } from '@/api/shared/type';
import {create } from  'zustand';
import { devtools } from 'zustand/middleware';

interface UserStore  {
	token: Token;
}

export const useUserStore = create<UserStore>()(
	devtools(set => ({
		token: {
			refreshToken: "",
			accessToken: "",
			grantType: "",
		},
		setToken: () => set(state => ({token : state.token})),
	}))
);
