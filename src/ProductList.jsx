import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 18,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Monstera",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594575939-b7a6d5d6e3f2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 22,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: 28,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 20,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594575939-b7a6d5d6e3f2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 16,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 7,
    name: "Aloe Vera",
    price: 14,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Echeveria",
    price: 12,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Haworthia",
    price: 15,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 24,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Cactus",
    price: 10,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 13,
    name: "Rose Plant",
    price: 30,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Orchid",
    price: 35,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566907225473-7b1b1f2e6c9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Anthurium",
    price: 27,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1572041000551-1c3e8f9a1f45?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "African Violet",
    price: 21,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Begonia",
    price: 23,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Geranium",
    price: 26,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80"
  }
];

const categories = [
  "Indoor Plants",
  "Succulents",
  "Flowering Plants"
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Plants</h1>

        <p>
          Discover beautiful plants for every corner of your home.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p className="product-description">
                      Beautiful {plant.name.toLowerCase()} for
                      your home.
                    </p>

                    <div className="product-bottom">
                      <span className="price">
                        ${plant.price}
                      </span>

                      <button
                        className={
                          isInCart(plant.id)
                            ? "add-btn disabled"
                            : "add-btn"
                        }
                        disabled={isInCart(plant.id)}
                        onClick={() =>
                          dispatch(addToCart(plant))
                        }
                      >
                        {isInCart(plant.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;
