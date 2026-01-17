import { useAuthStore } from "@/store/useAuthStore"
import OtherUser from "./pages/OtherUser";


const OnlineSection = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="p-4 w-full">
      {/* Other User Container */}
      <div className="flex flex-col gap-2">
        <OtherUser />
        <OtherUser />
        <OtherUser />
        <OtherUser />
      </div>



    </div>
  )
}

export default OnlineSection