import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-500/50 text-white">
      <Link to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md text-lg">
        Home
    </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>About</Link>
        <Link to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>Projects</Link>
        <Link to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;