import React from "react";

const Navbar = () => {
  return (
    <div className="bg-background sticky top-0 z-50 shadow-sm">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold cursor-pointer">
          Kanha Creations
        </h1>
        <nav className="space-x-2 text-sm sm:text-2xl sm:space-x-6">
          <a
            href="#"
            className="hover:text-blue-500 p-1  text-gray-600 font-bold"
          >
            Home
          </a>
          <a
            href="#products"
            className="hover:text-blue-500 p-1  text-gray-600 font-bold"
          >
            Products
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 p-1  text-gray-600 font-bold"
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
