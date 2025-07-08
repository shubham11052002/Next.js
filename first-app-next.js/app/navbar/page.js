import React from "react";
import Link from "next/link";

const Navbar = () => {
  return <div className="mt-8">
    <nav>
    <Link href="about" className="p-5 m-5 bg-red-400 text-black hover:bg-red-900 hover:text-white transition duration-700 ">about</Link>
    <Link href="contact" className="p-5 m-5 bg-red-400 text-black hover:bg-red-900 hover:text-white transition duration-700 ">contact</Link>
    </nav>
  </div>;
};

export default Navbar;
