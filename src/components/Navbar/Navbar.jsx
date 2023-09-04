import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/png/logo.png"
import '../../App.css'
const Navbar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  // Fungsi untuk menangani pencarian dan navigasi ke halaman pencarian
  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai pencarian (searchKeyword) ketika tombol pencarian ditekan.
    // Contoh: melakukan navigasi ke halaman pencarian dengan nilai pencarian.
    if (searchKeyword) {
      // Navigasi ke halaman pencarian dengan nilai pencarian
      window.location.href = `/search/${searchKeyword}`;
    }
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between font-medium p-4">
          <div className=" flex items-center gap-2">
              <img className='logo' src={Logo} alt="" />
          </div>
          
          <ul className="md:flex  items-center gap-2 w-full justify-center">
            <li>
              <Link to="/" className="px-2 py-2 ">Home</Link>
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
          <ul>
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
                to={`/search/${searchKeyword}`} // Link ke halaman pencarian dengan nilai pencarian
                className="absolute right-4 top-2/4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                style={{ right: '0' }} // Menambahkan properti CSS untuk mengatur posisi tombol
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
