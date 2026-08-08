import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const products = [
  // AIR PURIFYING
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b5b?w=500",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500",
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Air Purifying",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1632207691140-7e96c1f0c0d6?w=500",
  },
  {
    id: 5,
    name: "Boston Fern",
    category: "Air Purifying",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1620803366004-119a95a4f6e4?w=500",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500",
  },

  // SUCCULENTS
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
  },
  {
    id: 9,
    name: "Jade Plant",
    category: "Succulents",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
  },

  // TROPICAL
  {
    id: 13,
    name: "Monstera",
    category: "Tropical",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
  },
  {
    id: 14,
    name: "Bird of Paradise",
    category: "Tropical",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1614594895304-fe7116ac3b6f?w=500",
  },
  {
    id: 15,
    name: "Philodendron",
    category: "Tropical",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500",
  },
  {
    id: 16,
    name: "Calathea",
    category: "Tropical",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=500",
  },
  {
    id: 17,
    name: "Areca Palm",
    category: "Tropical",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500",
  },
  {
    id: 18,
    name: "Fiddle Leaf Fig",
    category: "Tropical",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((product) => product.category))];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="products-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section className="category" key={category}>
          <h2>{category} Plants</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <h3>{product.name}</h3>

                  <p className="price">${product.price}</p>

                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
