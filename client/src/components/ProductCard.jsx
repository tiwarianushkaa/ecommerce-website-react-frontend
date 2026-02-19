import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (

    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="
        backdrop-blur-xl
        bg-white/40 dark:bg-[#0f172a]/40
        border border-white/30 dark:border-white/10
        rounded-2xl
        shadow-lg hover:shadow-2xl
        overflow-hidden
      "
    >

      {/* CLICKABLE IMAGE */}
      <Link to={`/product/${product.id}`}>

        <div className="overflow-hidden">

          <motion.img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

        </div>

      </Link>


      {/* CONTENT */}
      <div className="p-5 space-y-2">

        <h2 className="font-semibold text-lg dark:text-white">
          {product.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-300">
          ₹{product.price}
        </p>

        <button
          onClick={() => {
            addToCart(product);
            toast.success("Added to cart 🛒");
          }}
          className="
            mt-3 w-full
            bg-[#5a3e36] dark:bg-white
            text-white dark:text-black
            py-2 rounded-xl
            hover:opacity-90 transition
          "
        >
          Add to Cart
        </button>

      </div>

    </motion.div>
  );
}