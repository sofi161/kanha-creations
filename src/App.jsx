import Navbar from "./components/Navbar";
import "./App.css"
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/ui/CartDrawer";

function App() {
 
  return (
    <>
    <CartProvider>
     <Navbar />
     <Hero />
     <Products />
     <CartDrawer />
     <Contact />
    </CartProvider>
    </>
  )
}

export default App
