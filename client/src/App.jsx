import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

// Animation
import { motion } from "framer-motion";


/*
=======================================
  App Component
  - Handles routing
  - Wraps layout
  - Adds page transitions
=======================================
*/

export default function App() {

  return (

    <Router>

      <Routes>

        {/* MAIN LAYOUT WRAPPER */}
        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={
              <PageWrapper>
                <Products />
              </PageWrapper>
            }
          />

          {/* PRODUCT DETAIL */}
          <Route
            path="/product/:id"
            element={
              <PageWrapper>
                <ProductDetail />
              </PageWrapper>
            }
          />

          {/* CART */}
          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Cart />
              </PageWrapper>
            }
          />

        </Route>

      </Routes>

    </Router>
  );
}


/*
=======================================
  Page Transition Wrapper
=======================================
*/

function PageWrapper({ children }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      {children}

    </motion.div>

  );
}