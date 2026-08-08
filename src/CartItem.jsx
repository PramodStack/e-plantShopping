import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  Unit Price: $
                  {item.price.toFixed(2)}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p>
                  Total: $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    decreaseQuantity(item)
                  }
                >
                  -
                </button>

                <span>
                  {" "}
                  {item.quantity}{" "}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch(
                      removeItem(item.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>
            Total Cart Amount: $
            {calculateTotalAmount().toFixed(2)}
          </h2>

          <button onClick={handleCheckout}>
            Checkout
          </button>

          <button>
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;
