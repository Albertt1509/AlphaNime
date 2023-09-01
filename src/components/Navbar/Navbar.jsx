import React from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between font-medium p-4">
          <div className="logo flex items-center gap-2">
            <div className="w-16 h-5 bg-yellow-500"></div>
          </div>
          {/* list */}
          <ul className="md:flex hidden items-center gap-2">
            <li>
              <Link to="/" className="px-2 py-2">Home</Link> {/* Ganti dengan Link */}
            </li>
            <li>
              <Link to="/anime-list" className="px-2 py-2">Anime List</Link> {/* Ganti dengan Link */}
            </li>
            <li>
              <Link to="/jadwal-rilis" className="px-2 py-2">Jadwal Rilis</Link> {/* Ganti dengan Link */}
            </li>
            <li>
              <Link to="/ongoing" className="px-2 py-2">On Going Anime</Link> {/* Ganti dengan Link */}
            </li>
          </ul>
          {/* icon */}
          <BiHelpCircle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
