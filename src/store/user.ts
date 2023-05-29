import {create } from  'zustand';
import { devtools } from 'zustand/middleware';

interface UserStore  {
	user: {
		userName: string;
	};
	setUser: () => void;
	removeUser:  () => void;
}

export const useStore = create<UserStore>()(
	devtools(set => ({
	  user: { userName: "" },
	  // "set" now receives as the third parameter, the name of an action that will be shown in Flipper
	  setUser: () => set(state => ({ user: {...state.user} }), false, 'increasePopulation'),
	  removeUser: () => set({ user: { userName: ""} }, false, 'removeUser')
	}))
);