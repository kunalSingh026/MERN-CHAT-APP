import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import Avatar from "../common/Avatar";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<div
			className={`flex items-center gap-3 p-2.5 my-1 border-3 border-black cursor-pointer font-mono transition-all duration-150 select-none
			${isSelected 
				? "bg-[#00FF9C] shadow-[4px_4px_0px_#000000] translate-x-[-1px] translate-y-[-1px]" 
				: "bg-white hover:bg-[#FFD700] hover:shadow-[3px_3px_0px_#000000] text-black"}
			`}
			onClick={() => setSelectedConversation(conversation)}
		>
			<Avatar 
				src={conversation.profilePic} 
				name={conversation.fullName} 
				size="w-10 h-10" 
				isOnline={isOnline} 
			/>

			<div className="flex flex-col flex-1 min-w-0">
				<div className="flex justify-between items-center">
					<p className="font-bold text-xs sm:text-sm truncate uppercase text-black">
						{conversation.fullName}
					</p>
					<span className="text-base">{emoji}</span>
				</div>
				<p className="text-[10px] font-bold tracking-tight truncate mt-0.5 text-black opacity-80">
					{isOnline ? "[ONLINE]" : "[OFFLINE]"}
				</p>
			</div>
		</div>
	);
};

export default Conversation;