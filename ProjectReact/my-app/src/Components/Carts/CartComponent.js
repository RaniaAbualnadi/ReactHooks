import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ChoosenItem from "./ChoosenItem";
import "./CartComponent.css";

function CartComponent() {
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  useEffect(() => {
    let receivedItems = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];
    setCartItems(receivedItems);
    calculateTotalPrice();
    console.log("first round " + totalItemsPrice);
  }, []);

  const handleIncreaseQuantity = (index) => {
    let prevStorageData = cartItems;
    if (prevStorageData[index].quantity <= 4) {
      prevStorageData[index].quantity += 1;
      setCartItems(prevStorageData);
      localStorage.setItem("cartKey", JSON.stringify(cartItems));
      calculateTotalPrice();
    }
  };
  const handleDecreaseQuantity = (index) => {
    let prevStorageData = cartItems;
    if (prevStorageData[index].quantity >= 2) {
      prevStorageData[index].quantity -= 1;
      setCartItems(prevStorageData);
      localStorage.setItem("cartKey", JSON.stringify(cartItems));
    } else {
      let prevStorageData = cartItems;
      prevStorageData.splice(index, 1);
      setCartItems(prevStorageData);
      localStorage.setItem("cartKey", JSON.stringify(cartItems));
    }
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    let sum = 0;
    let cartCalItemsList = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];
    cartCalItemsList.forEach((data) => (sum += data.price * data.quantity));
    setTotalItemsPrice(sum);
    console.log("Sum :" + sum + " leng" + cartCalItemsList.length);
    updateUserCart();
  };
  const handleDiscountInput = (e) => {
    setCode(e.target.value);
  };
  const submitDiscount = (e) => {
    e.preventDefault();
    if (code === "save20") {
      setDiscount(totalItemsPrice * (20 / 100));
      console.log(totalItemsPrice - discount);
    }
  };
  const updateUserCart = () => {
    if (localStorage.getItem("currentUser")) {
      let userInfoObj = JSON.parse(localStorage.getItem("currentUser"));

      userInfoObj.userCartItems = cartItems;

      localStorage.setItem("currentUser", JSON.stringify(userInfoObj));
    }
  };

  return (
    <div className="">
      <h2 className="CheckoutPageTitle"> Your Cart</h2>
      <div className="choosenIemsContainer">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((data, index) => (
              <ChoosenItem
                key={index}
                itemIndex={index}
                itemName={data.title}
                itemPrice={data.price}
                itemQuantity={data.quantity}
                itemImage={data.src}
                itemPriceQuantity={data.price * data.quantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            ))}
            <form onSubmit={submitDiscount}>
              <div className="checkout-summary">
                <div className="checkout-s-label"> Total Price :</div>
                <div className="checkout-s-value">{totalItemsPrice} $</div>
                <div className="checkout-s-label"> Discount Coupon :</div>
                <div className="checkout-s-value">
                  {" "}
                  <input type="text" onChange={handleDiscountInput} />
                </div>
                <div className="checkout-s-label"> Total discount :</div>
                <div className="checkout-s-value"> {discount} $</div>
                <div className="checkout-s-label">
                  {" "}
                  Total Price After Discount :
                </div>
                <div className="checkout-s-value">
                  {" "}
                  {totalItemsPrice - discount} $
                </div>
              </div>
            </form>

            <button className="checkoutBtn">
              <Link to="/checkout"> Checkout</Link>
            </button>
          </>
        ) : (
          <div className="emptyCartContainer">
            <img
              src="http://www.shitalexports.com/img/empty-cart.jpg"
              alt="empty cart"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CartComponent;
