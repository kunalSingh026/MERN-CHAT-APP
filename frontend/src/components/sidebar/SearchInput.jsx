import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from '../../zustand/useConversation';
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3) {
            return toast.error('SEARCH TERM MUST BE AT LEAST 3 CHARACTERS');
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        } else toast.error("OPERATOR NOT FOUND!");
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-2">
            <input 
                type="text" 
                placeholder="SEARCH_OPERATOR..." 
                className="flex-1 py-2 px-3 bg-white border-3 border-black shadow-[3px_3px_0px_#000000] text-xs font-bold text-black uppercase focus:bg-[#00FF9C] focus:outline-none transition-all placeholder:text-gray-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
            />
            <button 
                type="submit" 
                className="p-2.5 bg-[#00FF9C] border-3 border-black shadow-[3px_3px_0px_#000000] text-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all"
                title="Search"
            >
                <IoSearchSharp className="w-4 h-4 stroke-[2]" />
            </button>
        </form>
    );
};

export default SearchInput;