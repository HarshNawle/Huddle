import { create } from "zustand";

type OtherUser = {
  _id: string;
  fullName: string;
  email: string;
  gender: "male" | "female";
  profile: string;
};

type UserStore = {
  users: OtherUser[];
  setUsers: (users: OtherUser[]) => void;
};

export const useOtherUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
