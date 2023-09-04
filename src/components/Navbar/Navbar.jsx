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
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between font-medium p-4">
          <div className="flex items-center gap-2">
            <img className='logo' src={Logo} alt="" />
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              
            </button>
          </div>
            
          <ul className="md:flex md:items-center gap-2 w-full justify-center">
            <li>
              <Link to="/" className="px-2 py-2">Home</Link>
            </li>
            <li>
              <Link to="/anime-list" className="px-2 py-2">Anime List</Link>
            </li>
            <li>
              <Link to="/jadwal-rilis" className="px-2 py-2">Jadwal Rilis</Link>
            </li>
            <li>
              <Link to="/ongoing" className="px-2 py-2">On Going Anime</Link>
            </li>
            <li>
              <Link to="/genres" className="px-2 py-2">Genre</Link>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
            </button>
          </div>
          <ul className="md:flex items-center gap-2">
            <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari anime..."
                  className="border rounded-full py-2 px-4 pr-12 w-full focus:outline-none focus:border-blue-500"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <Link
                  to={`/search/${searchKeyword}`}
                  className="absolute right-4 top-2/4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  style={{ right: '0' }}
                  onClick={handleSearch}
                >
                  Cari
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
