import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="background-image">
      <div className="home-page">
        <div className="home-content">
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Discover beautiful plants and bring nature into your home.
          </p>

          <button
            className="get-started"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
