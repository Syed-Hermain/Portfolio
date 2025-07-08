import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for web apps
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#Contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background/80 shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            Hermain - <span className="text-primary">Web Dev</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden bg-background/95 shadow-lg px-6 py-4 space-y-4 absolute w-full top-16 left-0 z-20 flex flex-col items-start">
    <nav className="flex flex-col gap-y-2 w-full">
      {navItems.map((item, key) => (
        <a
          key={key}
          href={item.href}
          className="text-foreground/90 hover:text-primary transition-colors duration-300 text-base font-medium"
        >
          {item.name}
        </a>
      ))}
      <div className="pt-2 flex justify-center">
      <ThemeToggle />
    </div>
    </nav>
    
  </div>
)}
    </nav>
  );
};

export default Navbar;
