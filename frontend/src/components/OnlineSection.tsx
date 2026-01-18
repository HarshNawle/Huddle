import OtherUser from "./pages/OtherUser";
import useGetOtherUsers from "@/hooks/useGetOtherUsers";
import { useOtherUserStore } from "@/store/useOtherUserStore";

const OnlineSection = () => {
  useGetOtherUsers(); // fetch & store users

  const users = useOtherUserStore((state) => state.users) ?? [];

  return (
    <div className="p-4 w-full flex-1 min-h-0 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col gap-2">
        {users.map((u) => (
          <OtherUser key={u._id} user={u} />
        ))}
      </div>
    </div>
  );
};

export default OnlineSection;
