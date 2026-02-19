import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import CartProvider from "./context/CartContext.jsx";

// Toast notifications
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <CartProvider>

      <App />

      {/* Global Toast Container */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "12px",
            background: "#0f172a",
            color: "#fff"
          }
        }}
      />

    </CartProvider>

  </React.StrictMode>
);