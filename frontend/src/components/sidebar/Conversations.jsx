import Conversation from './Conversation.jsx';
import useGetConversations from '../../hooks/useGetConversations.js';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    return (
        <div className="py-1 flex flex-col overflow-y-auto flex-1 pr-1 space-y-1">
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? (
                <div className="flex justify-center items-center py-8">
                    <span className="loading loading-spinner text-black"></span>
                </div>
            ) : null}
            {!loading && conversations.length === 0 && (
                <div className="text-center text-black font-bold text-xs py-8 bg-white border-2 border-black p-4 my-2">
                    [ NO_OPERATORS_FOUND ]
                </div>
            )}
        </div>
    );
};

export default Conversations;