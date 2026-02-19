import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* ================= BACKGROUND GRADIENT BLOBS ================= */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-400 opacity-20 blur-3xl rounded-full top-[-100px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400 opacity-20 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />
      </div>

      {/* ================= HERO SECTION ================= */}

      <section className="text-center py-28 max-w-5xl mx-auto px-4">

        <motion.h1
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-6xl font-bold tracking-tight leading-tight"
        >
          Build Beautiful Shopping Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.2 }}
          className="mt-6 text-lg text-gray-500 dark:text-gray-400"
        >
          Apple-inspired ecommerce UI built with React, modern animation,
          and clean product-focused design.
        </motion.p>

        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.4 }}
          className="mt-10 flex justify-center gap-5"
        >
          <Link
            to="/products"
            className="px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
          >
            Shop Now →
          </Link>

          <Link
            to="/cart"
            className="px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/10 transition"
          >
            View Cart
          </Link>
        </motion.div>

      </section>

      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="max-w-6xl mx-auto px-4 pb-24">

        <motion.h2
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          className="text-3xl font-semibold mb-10"
        >
          Featured Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {products.slice(0,3).map(product => (
            <motion.div
              key={product.id}
              whileHover={{ y:-6 }}
              transition={{ type:"spring", stiffness:200 }}
            >
              <ProductCard product={product}/>
            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}