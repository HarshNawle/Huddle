import { create } from "zustand";


type Message = {
    _id: string;
    sender: string;
    receiver: string;
    message: string;
    createdAt: string;
}

type MessageStore = {
    messages: Message[];
    setMessages: (messages: Message[]) => void;
    addMessage: (message: Message) => void;
    clearMessages: () => void;
};

export const useMessageStore = create<MessageStore>((set) => ({
    messages: [],

    setMessages: (messages) => set({ messages }),

    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    
    clearMessages: () => set({ messages: [] }),
}))