import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between  bg-blue-600 text-white fixed top-0 left-0 w-full shadow-md z-50">
            <span className="max-w-7xl  px-4 sm:px-6 lg:px-8  h-16 p-4">
                <Link href="/" className="text-lg font-bold">
                    Gemini.<i>AI</i>
                </Link>
                <span className="space-x-4  fixed right-10 ">
                    <Link href="/home" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300">
                        Contact
                    </Link>
                </span>
            </span>
        </nav>
    );
};

export default Navbar;