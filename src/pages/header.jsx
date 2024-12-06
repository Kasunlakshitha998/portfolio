import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // SVG Logo Component
  const PortfolioLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-8 h-8 text-orange-500"
      fill="currentColor"
    >
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.88 0 1.04-.84 1.85-1.87 1.85s-1.87-.81-1.87-1.85c0-1.04.84-1.88 1.87-1.88M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51a13.4 13.4 0 0 1-.79-1.87 9.97 9.97 0 0 1-.89.05c-2.18 0-3.66-.87-3.66-2s1.48-2 3.66-2c.3 0 .58.02.86.05.16-.55.35-1.08.58-1.6A6.5 6.5 0 0 0 6.5 5C3.47 5 1 6.96 1 9.5S3.47 14 6.5 14c1 0 1.93-.25 2.74-.7a9.3 9.3 0 0 1-1.16-1.94zm9.52-1.23c.63.38.97 1.77.31 3.96a6.43 6.43 0 0 0-2.4-.36 22.7 22.7 0 0 1-1.51 1.9c1.59 1.5 2.97 2.08 3.6 1.7.63-.35.82-1.82.3-3.96zm-3.1-5.09c.25.47.47.97.68 1.48.3-.02.59-.05.88-.05 2.18 0 3.66.87 3.66 2s-1.48 2-3.66 2a9.97 9.97 0 0 1-.89-.05 13.4 13.4 0 0 1-.79 1.87l-.29.51a9.3 9.3 0 0 1-1.16 1.94A6.5 6.5 0 0 0 17.5 14C20.53 14 23 12.04 23 9.5S20.53 5 17.5 5a6.5 6.5 0 0 0-3 .74z" />
    </svg>
  );

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 shadow-lg sticky top-0 z-50 bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-3xl font-bold cursor-pointer">
          <PortfolioLogo />
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
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className={`absolute top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-orange-500 text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul className="space-y-6 px-6 py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:underline transition-all duration-200 text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
