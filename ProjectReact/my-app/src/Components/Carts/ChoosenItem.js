import React from "react";
import "./CartComponent.css";

function ChoosenItem(props) {
  return (
    <div className="oneChosenItemContainer">
      <div className="choosenItemImageContainer">
        <img src={props.itemImage} alt={props.itemName} />
      </div>
      <div className="itemName">{props.itemName}</div>
      <div className="itemQuantityContainer">
        <button
          onClick={() => {
            props.handleDecreaseQuantity(props.itemIndex);
          }}
        >
          <i class="fas fa-minus"></i>
        </button>
        <div className="itemQuantity">{props.itemQuantity}</div>
        <button
          onClick={() => {
            props.handleIncreaseQuantity(props.itemIndex);
          }}
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div className="itemPrice">
        {Math.round(props.itemPriceQuantity * 100) / 100}
      </div>
    </div>
  );
}

export default ChoosenItem;
