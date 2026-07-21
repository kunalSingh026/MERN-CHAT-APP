import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import Avatar from "../common/Avatar";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="flex-1 flex flex-col h-full bg-[#F4F3E6] relative font-mono">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Active Chat Header */}
					<ChatHeader selectedConversation={selectedConversation} />
					{/* Messages Display */}
					<Messages />
					{/* Message Input Bar */}
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const ChatHeader = ({ selectedConversation }) => {
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(selectedConversation._id);

	return (
		<div className="bg-[#FFD700] px-4 py-2.5 border-b-4 border-black flex items-center justify-between z-10">
			<div className="flex items-center gap-3">
				<Avatar
					src={selectedConversation.profilePic}
					name={selectedConversation.fullName}
					size="w-9 h-9"
					isOnline={isOnline}
				/>
				<div className="flex flex-col">
					<span className="font-bold text-black text-xs sm:text-sm uppercase tracking-wide">
						TO: {selectedConversation.fullName}
					</span>
					<span className="text-[10px] font-bold text-black opacity-80">
						{isOnline ? "[STATUS: ONLINE]" : "[STATUS: OFFLINE]"}
					</span>
				</div>
			</div>
		</div>
	);
};

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className="flex items-center justify-center w-full h-full p-6 text-center">
			<div className="max-w-md bg-[#FFD700] border-4 border-black p-8 shadow-[6px_6px_0px_#000000] flex flex-col items-center gap-4">
				<div className="p-4 bg-[#00FF9C] border-3 border-black shadow-[3px_3px_0px_#000000]">
					<TiMessages className="text-5xl text-black" />
				</div>
				<div>
					<h2 className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight">
						WELCOME 👋 {authUser.fullName}
					</h2>
					<p className="text-xs font-bold text-black mt-2 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_#000000]">
						SELECT A CHAT PROTOCOL FROM THE SIDEBAR TO START TRANSMITTING MESSAGES
					</p>
				</div>
			</div>
		</div>
	);
};