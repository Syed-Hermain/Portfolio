import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for web apps
import ThemeToggle from "./ThemeToggle";


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-background/80 shadow-md fixed w-full z-10 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold ">
                            Hermain - <span className="text-primary">Web Dev</span>
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            Contact
                        </Link>
                        <ThemeToggle/>
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
                <div className="md:hidden bg-background/95 shadow-lg px-4 pt-2 pb-4 space-y-2 absolute w-full top-16 left-0 z-20">
                    <Link
                        to="/"
                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <ThemeToggle/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;