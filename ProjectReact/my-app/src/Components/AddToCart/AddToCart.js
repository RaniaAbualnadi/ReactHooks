// import React from "react";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../App";
export function AddToCart(props) {
  const { counter, setCounter } = useContext(UserContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    const cartArray = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];

    const itemToAdd = props.items;
    console.log(itemToAdd);
    let exist = false;
    if (localStorage.getItem("uerLogin")) {
      cartArray.forEach((element) => {
        if (element.id === itemToAdd.id) {
          exist = true;
        }
      });
      if (!exist) {
        cartArray.push(itemToAdd);
        setCounter(cartArray.length);

        console.log("cartarraylength" + cartArray.length);
      }
      localStorage.setItem("cartKey", JSON.stringify(cartArray));
      console.log(itemToAdd);
    } else {
      navigate("/Login");
    }
  };

  return (
    <button className="add-to-cart-btn" onClick={onClickHandler}>
      <div className="btn-icon">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </div>
      <div className="btn-text"> Add to Cart</div>
    </button>
  );
}

export default AddToCart;
