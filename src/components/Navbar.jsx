import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu in mobile view
  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="p-4 text-black dark:text-gray-300">
      <div className="md:hidden flex items-center">
        <label htmlFor="menu-toggle" className="cursor-pointer">
          <span onClick={toggleMenu} className="text-3xl">
            ☰
          </span>
        </label>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 text-black dark:text-gray-300 rounded-lg z-50">
          <ul className="md:flex space-x-6 text-2xl">
            <li>
              <a href="#Hero" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}>Education</a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>Work</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
