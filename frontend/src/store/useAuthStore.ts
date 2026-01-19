import axios from "axios";
import toast from "react-hot-toast";
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
  logout: () => Promise<void>;
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
          user: {
            email: res.data.user.email,
            gender: res.data.user.gender,
            fullName: res.data.user.fullName,
            profile: res.data.user.profile,
          },

          isAuthenticated: true,
        });

        return res.data.message;
      },

      logout: async () => {
        try {
          await axios.delete("http://localhost:8400/api/users/logout");
          
          
          toast.success("Logged out successfully 👋");
        } catch (error) {
          console.log("Error in logout:", error);
          toast.error("Logout failed. Try again!");
        } finally {
          //clear frontend state nop matter what
          localStorage.removeItem("huddle-auth");
          set({
            user: null,
            isAuthenticated: false,
          })
        }
      },
    }),
    {
      name: "huddle-auth", // localStorage key
    }
  )
);
