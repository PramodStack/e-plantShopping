import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-small">
            WELCOME TO
          </p>

          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home
            with our carefully selected collection of
            beautiful houseplants.
          </p>

          <Link
            to="/plants"
            className="get-started-btn"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />
      </Routes>

      {location.pathname !== "/" && (
        <footer>
          <p>
            © 2025 Paradise Nursery. Grow something
            beautiful.
          </p>
        </footer>
      )}
    </div>
  );
}

export default App;
