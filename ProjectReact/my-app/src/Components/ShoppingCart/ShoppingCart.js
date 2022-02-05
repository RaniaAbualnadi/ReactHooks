import React, { useContext } from "react";

import { UserContext } from "../../App";
import "./ShoppingCart.css";
function ShoppingCart() {
  const { counter, setCounter } = useContext(UserContext);
  // const [counter, setCounter] = useState(
  //   localStorage.getItem("cartKey")
  //     ? JSON.parse(localStorage.getItem("cartKey")).length
  //     : 0
  // );
  const updateCounter = () => {
    let receivedItems = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];
    setCounter(receivedItems.length);
    console.log("recived" + receivedItems.length);
  };

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      updateCounter();
    });
  }, []);
  //   updateCounter();
  return (
    <div>
      <div className="shopping-cart-container">
        <i class="fas fa-shopping-cart"></i>
        <div className="shopping-counter">{counter}</div>
      </div>
      <div></div>
    </div>
  );
}

export default ShoppingCart;
