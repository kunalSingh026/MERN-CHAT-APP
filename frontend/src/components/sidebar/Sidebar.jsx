import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { useAuthContext } from '../../context/AuthContext';
import Avatar from '../common/Avatar';

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="w-full md:w-80 lg:w-96 border-b-4 md:border-b-0 md:border-r-4 border-black p-4 flex flex-col bg-[#F4F3E6]">
      {/* Header Profile / Branding Card */}
      <div className="bg-[#FFD700] border-3 border-black p-3 shadow-[3px_3px_0px_#000000] flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar src={authUser?.profilePic} name={authUser?.fullName} size="w-10 h-10" isOnline={true} />
          <div className="flex flex-col min-w-0">
            <h3 className="font-bold text-black text-xs sm:text-sm truncate uppercase leading-tight">{authUser?.fullName}</h3>
            <span className="text-[10px] font-bold text-black opacity-80 truncate">@{authUser?.username}</span>
          </div>
        </div>
        <LogoutButton />
      </div>

      <SearchInput />
      
      <div className="my-2 py-1 px-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest border-2 border-black">
        [ DIRECT_MESSAGES ]
      </div>

      <Conversations />
    </div>
  );
};

export default Sidebar;
