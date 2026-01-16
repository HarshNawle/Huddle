import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  email: string;
  gender: "Male" | "Female" | "male" | "female";
  fullName: string;
  profile: string;
};


type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email, password) => {
        const res = await axios.post(
          "http://localhost:8400/api/users/login",
          { email, password },
          { withCredentials: true }
        );

        set({
          user: { email, 
            gender: res.data.user.gender,
            fullName: res.data.user.fullName,
            profile: res.data.user.profile,
          },
          
          isAuthenticated: true,
        });

        return res.data.message;
      },

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "huddle-auth", // localStorage key
    }
  )
);
