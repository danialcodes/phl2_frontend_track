import { ListTodo } from 'lucide-react';
import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggle';

const NavBar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
            
            <Link to="/">
                <div className="flex items-center text-3xl">
                    <ListTodo size={"30px"}/> <span className="font-bold ml-2">Dani</span>Do
                </div>
            </Link>
            <div className='flex gap-5 text-2xl text-purple-600'>
                <Link to="/" className="font-semibold">Tasks</Link>
                <Link to="/users" className="font-semibold">Users</Link>
            </div>
            <div><ModeToggle/></div>
        </nav>
    );
};

export default NavBar;