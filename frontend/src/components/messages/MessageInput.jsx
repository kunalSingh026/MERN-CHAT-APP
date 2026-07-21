import { BsSend } from 'react-icons/bs';
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className="p-3 md:p-4 border-t-4 border-black bg-[#F4F3E6]" onSubmit={handleSubmit}>
            <div className="w-full relative flex items-center gap-2">
                <input 
                    type="text" 
                    className="flex-1 py-3 px-4 text-xs sm:text-sm font-bold bg-white border-3 border-black shadow-[4px_4px_0px_#000000] text-black placeholder:text-gray-500 uppercase focus:bg-[#00FF9C] focus:outline-none transition-all" 
                    placeholder="TYPE_TRANSMISSION_..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button 
                    type="submit" 
                    disabled={loading || !message.trim()}
                    className="p-3.5 bg-[#FFD700] hover:bg-yellow-400 disabled:bg-gray-300 border-3 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] text-black transition-all flex items-center justify-center font-bold"
                >
                    {loading ? <div className="loading loading-spinner loading-xs text-black"></div> : <BsSend className="w-4 h-4 stroke-[1]" />}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;