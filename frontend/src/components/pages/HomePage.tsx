import SideBar from "../SideBar";
import MessageSection from "../MessageSection";
import OnlineSection from "../OnlineSection";

const HomePage = () => {
  return (
    <div className="flex flex-row lg:flex-row 
     gap-4 lg:gap-8 sm:p-2 md:p-4 m-5 lg:p-6 
    flex-1 overflow-hidden bg-yellow-400">
      <div className="flex flex-col gap-4 w-full max-w-[450px]">
        <SideBar />
        <OnlineSection />
      </div>
      <MessageSection />
    </div>
  );
};

export default HomePage;
