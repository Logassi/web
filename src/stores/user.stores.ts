import { create } from "zustand";
import { deleteCookie } from "cookies-next";

// export interface IUser {
//   username: string;
//   email: string;
// }

export interface IUserDataFromAPI {
  email: string;
  username: string;
  name: string;
  birthday: string;
  horoscope: string;
  zodiac: string;
  height: number;
  weight: number;
  interest: string[];
}

interface IUserStore {
  user: IUserDataFromAPI | null;
  onAuthSuccess: (user: IUserDataFromAPI | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<IUserStore>((set) => ({
  user: null,
  onAuthSuccess: (payload) => set(() => ({ user: payload })),
  clearAuth: () => {
    set(() => ({ user: null }));
    deleteCookie("access_token");
  },
}));

export default useAuthStore;
