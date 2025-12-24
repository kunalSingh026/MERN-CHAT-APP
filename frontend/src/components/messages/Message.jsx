import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	// 1. Check if the message is from the logged-in user
	const fromMe = message.senderId === authUser._id;

  const formattedTime = extractTime(message.createdAt);

	// 2. Determine class for alignment (Right for me, Left for them)
	const chatClassName = fromMe ? 'chat-end' : 'chat-start';

	// 3. Determine profile picture to show
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

	// 4. Determine background color (Blue for me, Gray for them)
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

    // Optional: Format time (Simple version)
    // const formattedTime = extractTime(message.createdAt); 

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                {/* You can add time here later */}
                {formattedTime}
            </div>
		</div>
	);
};
export default Message;