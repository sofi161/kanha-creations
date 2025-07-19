// src/components/CartDrawer.jsx
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext"
import { IoMdCloseCircle } from 'react-icons/io';

export default function CartDrawer() {
  const { open, setOpen, items, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className={`
      fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300
      ${open ? 'translate-x-0' : 'translate-x-full'}
      w-3/4 md:w-1/3 lg:w-1/4 z-50
    `}>
      <div className="flex justify-end p-4">
        <button onClick={() => setOpen(false)}>
          <IoMdCloseCircle className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="flex-grow overflow-auto">
            {items.map(i => (
              <li key={i.id} className="flex justify-between items-center mb-2">
                <span>{i.title} (x{i.quantity})</span>
                <button className="text-blue-500" onClick={() => removeFromCart(i.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={clearCart} className="mt-auto bg-blue-500 text-white p-2 rounded">
          Clear Cart
        </button>
      </div>
    </div>
  );
}
