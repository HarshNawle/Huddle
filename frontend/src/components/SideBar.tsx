import { useAuthStore } from "@/store/useAuthStore";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Field } from "./ui/field";
import { Input } from "./ui/input";
import { LogOutIcon, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  }

  if (!user) return null;

  return (
    <div className="p-5 w-full max-w-[450px]">
      {/* SideBar Header with user profile and name */}
      <div>
        {/* User Profile Picture */}
        <div className="flex flex-col gap-4">

          <div className="flex items-center justify-between">
            {/* User Profile Picture and Name */}
            <div className="flex items-center gap-3">
              <Avatar className="size-16 rounded-full">
                <AvatarImage src={user?.profile} alt="avatar" className="object-cover w-full h-full" />
              </Avatar>
              <p className=" font-bold text-xl">{user.fullName}</p>
            </div>

            <div className="size-10 dark:bg-gray-900 rounded-xl p-1 flex items-center justify-center">
              <LogOutIcon className="cursor-pointer text-red-500" onClick={handleLogout} />
            </div>
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
