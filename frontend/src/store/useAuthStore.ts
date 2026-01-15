import { create } from "zustand";

interface AuthUser {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    authUser: AuthUser | null;
    isCheckingAuth: boolean;
    setAuthUser: (user: AuthUser | null) => void;
    setIsCheckingAuth: (isChecking: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    authUser: null,
    isCheckingAuth: true,
    setAuthUser: (user) => set({ authUser: user }),
    setIsCheckingAuth: (isChecking) => set({ isCheckingAuth: isChecking }),
}));