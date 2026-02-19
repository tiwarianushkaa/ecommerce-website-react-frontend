import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const { totalItems } = useContext(CartContext);

  const location = useLocation();

  const [dark, setDark] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

  }, []);

  const toggleDarkMode = () => {

    const html = document.documentElement;

    html.classList.toggle("dark");

    const isDark = html.classList.contains("dark");

    setDark(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const active = (path) =>
    location.pathname === path
      ? "font-semibold"
      : "opacity-80 hover:opacity-100";

  return (

    <nav className="
      sticky top-0 z-50
      backdrop-blur-xl
      bg-white/50 dark:bg-[#0f172a]/50
      border-b border-white/30 dark:border-white/10
    ">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <Link to="/" className="text-lg font-semibold">
          MyStore
        </Link>

        <div className="flex gap-8 items-center">

          <Link className={active("/")} to="/">Home</Link>

          <Link className={active("/products")} to="/products">
            Products
          </Link>

          <Link className={active("/cart")} to="/cart">
            Cart ({totalItems})
          </Link>

          {/* Theme toggle */}
          <button onClick={toggleDarkMode}>

            <AnimatePresence mode="wait">

              {dark ? (

                <motion.div key="sun">
                  <Sun size={20}/>
                </motion.div>

              ) : (

                <motion.div key="moon">
                  <Moon size={20}/>
                </motion.div>

              )}

            </AnimatePresence>

          </button>

        </div>

      </div>

    </nav>
  );
}