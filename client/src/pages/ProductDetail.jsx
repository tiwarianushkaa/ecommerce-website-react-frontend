import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function ProductDetail() {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  return (

    <div className="max-w-7xl mx-auto py-16 px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE — IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl
            overflow-hidden
            backdrop-blur-xl
            bg-white/40 dark:bg-[#0f172a]/40
            border border-white/20
            shadow-xl
          "
        >

          <motion.img
            src={product.image}
            alt={product.title}
            className="
              w-full
              h-[500px]
              object-cover
              transition-transform duration-500
              hover:scale-105
            "
          />

        </motion.div>


        {/* RIGHT SIDE — DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sticky top-24"
        >

          <h1 className="text-4xl font-semibold dark:text-white">
            {product.title}
          </h1>

          <p className="text-2xl font-medium text-gray-700 dark:text-gray-300">
            ₹{product.price}
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Experience premium quality and design crafted for modern lifestyle.
            This product combines aesthetics and functionality seamlessly.
          </p>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart 🛒");
            }}
            className="
              mt-4
              px-8 py-3
              rounded-2xl
              bg-[#5a3e36] dark:bg-white
              text-white dark:text-black
              font-medium
              shadow-md hover:shadow-xl
              transition
            "
          >
            Add to Cart
          </button>

        </motion.div>

      </div>

    </div>
  );
}