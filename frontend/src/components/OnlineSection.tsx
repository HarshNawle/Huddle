import { useAuthStore } from "@/store/useAuthStore"
import { Avatar, AvatarImage } from "./ui/avatar"


const OnlineSection = () => {
    const user = useAuthStore((state) => state.user);

    if (!user) return null;

  return (
    <div>
        <div>
            <Avatar>
                <AvatarImage src={user?.profile} />
            </Avatar>
        </div>
    </div>
  )
}

export default OnlineSection