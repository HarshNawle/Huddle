import { useAuthStore } from "@/store/useAuthStore";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Field } from "./ui/field";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SideBar = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="p-5 w-full max-w-[450px] bg-blue-400">
      {/* SideBar Header with user profile and name */}
      <div>
        {/* User Profile Picture */}
        <div className="flex flex-col gap-2">

          {/* User Profile Picture and Name */}
          <div className="flex items-center gap-3">
            <Avatar className="size-15 rounded-full">
              <AvatarImage src={user?.profile} alt="avatar" />
            </Avatar>
            <p className="text-black font-bold text-xl">{user.fullName}</p>
          </div>

          {/* Search Bar */}
          <div>
            <Field className="relative w-full">
              <Search className="absolute ml-[-190px] size-5 top-3 left-2 text-gray-500" />
              <Input placeholder="Search..." type="text"
                className="rounded-full pl-10" />
            </Field>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
