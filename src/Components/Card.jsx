import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useEffect } from "react";
import {
  addToCard,
  clearCart,
  decreaseQuantityFromCart,
  getTotal,
  removeFromCart,
} from "../Features/cartSlice";
import { useDispatch } from "react-redux";

const Card = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };

  const handleDecreaseQuantityFromCart = (cartItems) => {
    dispatch(decreaseQuantityFromCart(cartItems));
  };

  const handleIncreaseQuantityFromCart = (cartItems) => {
    dispatch(addToCard(cartItems));
  };

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cart-container">
        <h2>Shoping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your Cart Is Currently Empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-titles">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItems) => (
                <div className="cart-item" key={cartItems.id}>
                  <div className="cart-product">
                    <img src={cartItems.image} alt={cartItems.name} />
                    <div>
                      <h3>{cartItems.name}</h3>
                      <p>{cartItems.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItems)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price">${cartItems.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      onClick={() => handleDecreaseQuantityFromCart(cartItems)}
                    >
                      -
                    </button>
                    <div className="count">{cartItems.cartQuantity}</div>
                    <button
                      onClick={() => handleIncreaseQuantityFromCart(cartItems)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItems.price * cartItems.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleclearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>SubTotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes And Shipping Calculated At Checkout</p>
                <button>Checkout</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
