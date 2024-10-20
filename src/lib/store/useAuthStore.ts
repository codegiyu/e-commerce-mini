import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { SelectorFn } from '../types/general';
import { AuthStore } from '../types/store';
import { api } from '../services/axios';

const defaultAuth: Omit<AuthStore, 'actions'> = {
  user: null,
};

export const useInitAuth = create<AuthStore>()((/*set, get*/) => ({
  ...defaultAuth,
  actions: {
    signup: async (obj) => {
      const response = await api.request<unknown>({ method: 'POST', data: obj, url: '/auth/signup' });
      console.log({ signupRes: response });
    },
  },
}));

export const useAuthStore = <T>(selector: SelectorFn<AuthStore, T>) => {
  const state = useInitAuth(useShallow(selector));
  return state;
};