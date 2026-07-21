import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    
    return (
        <button 
            onClick={logout}
            disabled={loading}
            title="LOGOUT_SESSION"
            className="p-2 bg-red-400 hover:bg-red-500 border-2 border-black shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-black font-bold transition-all flex items-center justify-center"
        >
            {!loading ? (
                <BiLogOut className="w-5 h-5" />
            ) : (
                <span className="loading loading-spinner loading-xs text-black"></span>
            )}
        </button>
    );
};

export default LogoutButton;