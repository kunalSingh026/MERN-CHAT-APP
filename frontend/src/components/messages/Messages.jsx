import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className="px-4 md:px-6 py-4 flex-1 overflow-y-auto space-y-1">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			
			{!loading && messages.length === 0 && (
				<div className="h-full flex items-center justify-center py-12">
					<p className="text-center font-bold text-black text-xs bg-white border-3 border-black p-3 shadow-[4px_4px_0px_#000000]">
						SEND A MESSAGE TO INITIALIZE COMMUNICATOR PROTOCOL 💬
					</p>
				</div>
			)}
		</div>
	);
};

export default Messages;