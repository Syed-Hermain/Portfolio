import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-background/80 shadow-md fixed w-full z-10 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            MyPortfolio
                        </Link>
                    </div>
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
                    </div>
                    {/* Mobile menu button (optional) */}
                    {/* Add a mobile menu here if needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;