import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <div className="w-full max-w-6xl h-[90vh] max-h-[850px] min-h-[550px] bg-white border-4 border-black shadow-[8px_8px_0px_#000000] flex flex-col overflow-hidden font-mono">
      {/* Top Terminal Bar */}
      <div className="bg-black text-[#FFD700] px-4 py-2 flex items-center justify-between border-b-4 border-black select-none text-xs sm:text-sm font-bold tracking-wider">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 border border-black inline-block"></span>
          </div>
          <span>BRUTAL_CHAT // TERMINAL_NODE_01</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs text-white">
          <span className="text-[#00FF9C]">● ENCRYPTED</span>
          <span>LATENCY: 18ms</span>
        </div>
      </div>

      {/* Main App Body */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden bg-[#F4F3E6]">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;