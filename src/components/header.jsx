import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900 transition">
        <div className="text-orange-500 text-xl font-bold">Kasun Lakshitha</div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-700 font-medium dark:text-gray-300">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button
          className="text-orange-500 text-xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-orange-500 text-xl ml-4"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
