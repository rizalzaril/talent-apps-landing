import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the hamburger and close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false); // Close the menu when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex w-full justify-between p-4 px-12 py-8 text-white">
      {/* Logo */}
      <div className="text-lg font-bold">Talentapps</div>

      {/* Mobile Menu: Hamburger Icon */}
      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="text-2xl text-white" /> // Close icon when menu is open
        ) : (
          <FaBars className="text-2xl text-white" /> // Hamburger icon when menu is closed
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-12">
        <li>
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu: Menu Items */}
      <ul
        className={`lg:hidden ${
          isMenuOpen
            ? "flex-col place-items-center absolute top-20 left-0 w-full bg-slate-950 backdrop-invert backdrop-opacity-10 p-12 space-y-4" // Add backdrop-blur-md here
            : "hidden"
        }`}
      >
        <li>
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
