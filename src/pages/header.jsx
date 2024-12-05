import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 shadow-lg sticky top-0 z-50 bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-3xl font-bold cursor-pointer">
          <FaReact />
          <span>Portfolio</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-700 font-medium dark:text-gray-300">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-orange-500 hover:underline transition-all duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="text-orange-500 text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 text-center">
          <ul className="space-y-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:underline transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
