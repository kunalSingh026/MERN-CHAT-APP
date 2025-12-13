import { BiLogOut } from 'react-icons/bi';

const LogoutButton = () => {
    return (
        <div className='mt-auto'>
            {/* Fix: Added parentheses above and changed text-red to text-white (or text-red-500) */}
            <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
        </div>
    );
};

export default LogoutButton;