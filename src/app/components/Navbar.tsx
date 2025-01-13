'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For active link highlight

const Navbar = () => {
  // State to track whether the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  // Function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/" aria-label="Navigate to Home">
            My Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              aria-label="Navigate to Home"
              className={`hover:text-blue-400 ${
                pathname === '/' ? 'font-bold text-blue-500' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              aria-label="Navigate to Projects"
              className={`hover:text-blue-400 ${
                pathname === '/projects' ? 'font-bold text-blue-500' : ''
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              aria-label="Navigate to Contact"
              className={`hover:text-blue-400 ${
                pathname === '/contact' ? 'font-bold text-blue-500' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            className="text-2xl"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-700 space-y-2 p-4">
          <li className="text-center text-lg">
            <Link
              href="/"
              aria-label="Navigate to Home"
              className={`block hover:text-blue-400 ${
                pathname === '/' ? 'font-bold text-blue-500' : ''
              }`}
              onClick={closeMenu} // Close menu after clicking
            >
              Home
            </Link>
          </li>
          <li className="text-center text-lg">
            <Link
              href="/projects"
              aria-label="Navigate to Projects"
              className={`block hover:text-blue-400 ${
                pathname === '/projects' ? 'font-bold text-blue-500' : ''
              }`}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="text-center text-lg">
            <Link
              href="/contact"
              aria-label="Navigate to Contact"
              className={`block hover:text-blue-400 ${
                pathname === '/contact' ? 'font-bold text-blue-500' : ''
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
