import SideBar from "../SideBar";
import MessageSection from "../MessageSection";

const HomePage = () => {
  return (
    <div className="flex flex-row lg:flex-row 
     gap-4 lg:gap-8 sm:p-2 md:p-4 m-5 lg:p-6 
    flex-1 overflow-hidden bg-yellow-400">
      <SideBar />
      <MessageSection />
    </div>
  );
};

export default HomePage;
