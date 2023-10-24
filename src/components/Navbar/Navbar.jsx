import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/png/logo.png"
import '../../App.css'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    if (searchKeyword) {
      window.location.href = `/search/${searchKeyword}`;
    }
  };
  return (
    <div>
      <nav className="bg-white shadow-md relative">
        <div className="flex items-center justify-between font-medium p-4">
          <div className="md:hidden">
            <div className={`text-gray-600 hover:text-gray-800 ${menuOpen ? 'menu-enter-active menu-enter-to' : 'menu-leave-active menu-leave-to'}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <AiOutlineMenu />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img className='logo' src={Logo} alt="" />
          </div>
          {/* Menu Mobile */}
          <ul className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 z-50 ${menuOpen ? "translate-x-[-1rem]" : "-translate-x-full"}`} style={{ marginLeft: menuOpen ? '0' : '-100%' }}>

            <img className='logo' src={Logo} alt="" />

            <li>
              <Link to="/" className="py-7 px-3 inline-block">Home</Link>
            </li>
            <li>
              <Link to="/anime-list" className="py-7 px-3 inline-block">Anime List</Link>
            </li>
            <li>
              <Link to="/ongoing" className="py-7 px-3 inline-block">On Going Anime</Link>
            </li>
            <li>
              <Link to="/genres" className="py-7 px-3 inline-block">Genre</Link>
            </li>
          </ul>
          <ul className={`md:flex hidden md:items-center gap-2 w-full justify-center ${menuOpen ? 'menu-enter-active menu-enter-to translate-x-2' : 'menu-leave-active menu-leave-to'}`}>
            {menuOpen ? null : (
              <>
                <li>
                  <Link to="/" className="px-2 py-2">Home</Link>
                </li>
                <li>
                  <Link to="/ongoing" className="px-2 py-2">On Going Anime</Link>
                </li>
                <li>
                  <Link to="/anime-list" className="px-2 py-2">Anime List</Link>
                </li>
                <li>
                  <Link to="/genres" className="px-2 py-2">Genre</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="md:flex items-center gap-2">
            <li>
              <div className="relative">
                <input type="text" placeholder="Cari anime..." className="border rounded-lg py-2 px-4 pr-12 w-full focus:outline-none focus:border-blue-500" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
                <Link
                  to={`/search/${searchKeyword}`}
                  className="absolute right-4 top-2/4 transform -translate-y-1/2 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-sm"
                  style={{ right: '0' }}
                  onClick={handleSearch}
                >Cari
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
