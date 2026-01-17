import { useAuthStore } from "@/store/useAuthStore";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import { Input } from "./ui/input";
import { Send } from "lucide-react";


const MessageSection = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="flex items-center gap-3 p-2">
        {/* Avatar */}
        <div className="relative">
          <Avatar className="size-16">
            <AvatarImage src={user?.profile} className="object-cover" />
          </Avatar>
          <span className="absolute bottom-0 right-0 size-4 bg-green-500 rounded-full border-2 border-white dark:border-green-200" />
        </div>
        {/* Name */}
        <div>
          <p className="font-semibold text-xl">Alia Bhatt</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Active Now</p>
        </div>
      </div>
      {/* Message Container */}
      <div className="flex-1 w-full overflow-y-auto p-4 space-y-4">
        {/* Messages will go here */}

      </div>

      {/* Input Container */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              placeholder="Type a message..."
              className="w-full"
            />
          </div>
          <button className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors cursor-pointer">
            <Send className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageSection
