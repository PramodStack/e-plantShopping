import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature into your home with beautiful and healthy
          houseplants.
        </p>

        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Shopping Cart</h1>
        <p>Your cart is currently empty.</p>

        <button onClick={() => navigate("/plants")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <h2>
          Total Items: {totalItems}
        </h2>

        <h2>
          Total Cost: ${totalCost.toFixed(2)}
        </h2>
      </div>

      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-actions">
        <button
          className="checkout-button"
          onClick={() => alert("Coming Soon!")}
        >
          Checkout
        </button>

        <button
          className="continue-button"
          onClick={() => navigate("/plants")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        Paradise Nursery
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/plants">Plants</Link>

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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
