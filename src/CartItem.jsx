import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>

        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any plants to your shopping cart yet.
        </p>

        <Link to="/plants" className="continue-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>

        <p>
          {totalItems}{" "}
          {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => {
            const itemTotal =
              item.price * item.quantity;

            return (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <strong>
                    ${itemTotal.toFixed(2)}
                  </strong>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Items</span>
            <strong>{totalItems}</strong>
          </div>

          <div className="summary-row">
            <span>Total Amount</span>
            <strong>
              ${totalAmount.toFixed(2)}
            </strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              alert("Checkout Coming Soon!")
            }
          >
            Checkout
          </button>

          <Link
            to="/plants"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
