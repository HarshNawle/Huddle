import SideBar from "../SideBar";
import MessageSection from "../MessageSection";
import OnlineSection from "../OnlineSection";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1500px] h-[calc(100vh-4.5rem)] flex flex-row lg:flex-row gap-3 lg:gap-8 sm:p-2 lg:p-6 overflow-hidden">
      <div className="flex flex-col w-full max-w-[450px] min-h-0 overflow-hidden">
        <SideBar />
        <OnlineSection />
      </div>
      <MessageSection />
    </div>
  );
};

export default HomePage;
