import { writable } from 'svelte/store';

export interface Theme {
   darkTheme: boolean;
}

const initStore = () => {
   const initialTheme: Theme = {
        darkTheme: false,
   };

   const { subscribe, set, update } = writable(initialTheme);

   return {
      subscribe,
      set: (theme: Theme) => set(theme),
      toggle: () => 
        update(({ darkTheme, ...rest }) => ({
            ...rest,
            darkTheme: !darkTheme
        })),
      reset: () => set(initialTheme)
   };
};

export const darkTheme = initStore();