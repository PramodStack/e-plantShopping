import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b0a?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8e8b4a1?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 5,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 6,
    name: "Echeveria",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 7,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 9,
    name: "Lavender",
    category: "Flowering Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedProducts((previous) => {
      if (previous.includes(product.id)) {
        return previous;
      }

      return [...previous, product.id];
    });
  };

  const categories = [
    ...new Set(
      plants.map((plant) => plant.category)
    ),
  ];

  return (
    <div className="products-page">
      <h1>Paradise Nursery</h1>

      <p>
        Cart Items: {cartItems.length}
      </p>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter(
                (plant) =>
                  plant.category === category
              )
              .map((product) => {
                const isAdded =
                  addedProducts.includes(
                    product.id
                  );

                return (
                  <div
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>

                    <p>
                      Price: ${product.price}
                    </p>

                    <button
                      disabled={isAdded}
                      onClick={() =>
                        handleAddToCart(product)
                      }
                    >
                      {isAdded
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
