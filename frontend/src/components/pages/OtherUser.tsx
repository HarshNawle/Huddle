import { useOtherUserStore } from "@/store/useOtherUserStore";
import { Avatar, AvatarImage } from "../ui/avatar";

type OtherUserType = {
    _id: string;
    fullName: string;
    email: string;
    gender: "male" | "female";
    profile: string;
};


type Props = {
    user: OtherUserType;
};

const OtherUser = ({ user }: Props) => {
    const selectedUser = useOtherUserStore((state) => state.selectedUser);
    const setSelectedUser = useOtherUserStore((state) => state.setSelectedUser);
    
    const handleSelectUser = () => {
        setSelectedUser(user);
    };

    return (
        <>
            <div
                onClick={handleSelectUser}
                className={`${selectedUser?._id === user._id ? "bg-gray-300 dark:bg-gray-800" : ""} flex items-center justify-between gap-3 p-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl cursor-pointer transition-all duration-200`}>
                <div className="flex gap-3">
                    <div className="relative">
                        <Avatar className="size-12 overflow-hidden">
                            <AvatarImage
                                src={user.profile}
                                className="object-cover w-full h-full"
                            />
                        </Avatar>

                        <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                    </div>

                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-700 dark:text-gray-300">
                            {user.fullName}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Hello
                        </p>
                    </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sun
                </p>
            </div>
        </>
    );
};

export default OtherUser;
