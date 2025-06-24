import React from 'react';
import { Link } from 'react-router';
import StarBackground from '../components/StarBackground';
const NotFound: React.FC = () => (

    <>
    <StarBackground/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-background/80 text-gray-800">
        <h1 className="text-8xl font-bold m-0">404</h1>
        <h2 className="mt-4 mb-2 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-6">The page you are looking for does not exist.</p>
        <Link
            to="/"
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
            Go Home
        </Link>
    </div>
    </>
);

export default NotFound;
