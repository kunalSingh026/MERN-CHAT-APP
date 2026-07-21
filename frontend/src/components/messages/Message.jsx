import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import Avatar from "../common/Avatar";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const name = fromMe ? authUser.fullName : selectedConversation?.fullName;
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`flex gap-3 my-3 items-end font-mono ${fromMe ? "flex-row-reverse" : "flex-row"}`}>
			<Avatar src={profilePic} name={name} size="w-8 h-8" />
			<div className={`flex flex-col max-w-[75%] sm:max-w-[65%] ${fromMe ? "items-end" : "items-start"}`}>
				<div
					className={`px-4 py-2.5 border-3 border-black text-xs sm:text-sm font-bold text-black ${shakeClass} ${
						fromMe
							? "bg-[#00FF9C] shadow-[4px_4px_0px_#000000]"
							: "bg-white shadow-[4px_4px_0px_#000000]"
					}`}
				>
					{message.message}
				</div>
				<span className="text-[10px] font-bold text-black mt-1 px-1 opacity-75">
					[{formattedTime}]
				</span>
			</div>
		</div>
	);
};

export default Message;