import type { error } from '@sveltejs/kit';
import { writable } from 'svelte/store';

export interface Theme {
   darkTheme: boolean;
}

export interface Toast {
   type: 'success' | 'error' | 'warning' | 'info';
   message: string;
   show?: boolean;
}
const initStoreTheme = () => {
   const initialTheme: Theme = {
      darkTheme: false,
   };

   const { subscribe, set, update } = writable(initialTheme);

   return {
      subscribe,
      set: (theme: Theme) => set(theme),
      toggle: () => update(({ darkTheme, ...rest }) => ({
         ...rest,
         darkTheme: !darkTheme
      })),
      reset: () => set(initialTheme)
   };
};

const initToast = () => {
   const initialToast: Toast = {
      type: 'success',
      message: '!Hola',
      show: false
   };

   const { subscribe, set, update } = writable(initialToast);

   return {
      subscribe,
      set: (toast: Toast) => set(toast),
      success: (newMessage: string) => update(({ message, ...rest }) => ({
         ...rest,
         type: 'success',
         message: newMessage,
         show: true
      })),
      error: (newMessage: string) => update(({ message, ...rest }) => ({
         ...rest,
         type: 'error',
         message: newMessage,
         show: true
      })),
      reset: () => set(initialToast)
   };
};

export const darkTheme = initStoreTheme();
export const toast = initToast()