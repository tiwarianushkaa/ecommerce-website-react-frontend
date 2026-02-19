import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/*
========================================
  CART PAGE
  - Shows cart items
  - Quantity controls
  - Remove item
  - Subtotal calculation
========================================
*/

export default function Cart() {

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart
  } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Empty cart UI
  if (!cart.length) {
    return (
      <div className="text-center mt-20 text-lg text-gray-700 dark:text-white">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold dark:text-white">
        Your Cart
      </h1>

      {/* CART ITEMS */}
      <div className="space-y-4">

        {cart.map((item) => (

          <div
            key={item.id}
            className="
              flex justify-between items-center
              p-4 rounded-2xl
              bg-white/70 dark:bg-white/10
              backdrop-blur-md
              border border-white/20
              shadow-sm
            "
          >

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div>

                <h3 className="font-semibold dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ₹{item.price}
                </p>

                {/* QUANTITY CONTROLS */}

                <div className="flex items-center gap-3 mt-2">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="
                      w-8 h-8 rounded-lg
                      flex items-center justify-center
                      border border-gray-300 dark:border-white/20
                      bg-white/70 dark:bg-white/10
                      text-gray-800 dark:text-white
                      hover:bg-white dark:hover:bg-white/20
                      transition
                    "
                  >
                    -
                  </button>

                  <span className="font-semibold dark:text-white">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="
                      w-8 h-8 rounded-lg
                      flex items-center justify-center
                      border border-gray-300 dark:border-white/20
                      bg-white/70 dark:bg-white/10
                      text-gray-800 dark:text-white
                      hover:bg-white dark:hover:bg-white/20
                      transition
                    "
                  >
                    +
                  </button>

                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}

            <button
              onClick={() => removeFromCart(item.id)}
              className="
                text-red-400 hover:text-red-600
                font-medium transition
              "
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      {/* SUMMARY SECTION */}

      <div
        className="
          flex justify-between items-center
          p-6 rounded-2xl
          bg-white/70 dark:bg-white/10
          backdrop-blur-md
          border border-white/20
        "
      >

        <div className="text-lg font-semibold dark:text-white">
          Subtotal: ₹{subtotal}
        </div>

        <button
          onClick={clearCart}
          className="
            px-5 py-2 rounded-lg
            bg-red-500 text-white
            hover:bg-red-600 transition
          "
        >
          Clear Cart
        </button>

      </div>

    </div>
  );
}