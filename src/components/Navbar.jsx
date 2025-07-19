import React, { useContext } from "react";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { items, toggleCart } = useContext(CartContext);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
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
         
            <button onClick={toggleCart} className="hover:text-blue-500 p-1  text-gray-600 font-bold">
        Cart
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 text-xs">
            {totalQty}
          </span>
        )}
      </button>
          
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
