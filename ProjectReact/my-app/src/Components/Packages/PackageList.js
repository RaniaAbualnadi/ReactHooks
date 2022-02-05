import React from "react";
import AddToCart from "../AddToCart/AddToCart";

function PackageList(props) {
  return (
    <div className="packages-card">
      <div className="packages-img">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="packages-title">
        <div className="HostingTitleHaneen">
          <h4>{props.title}</h4>
        </div>

        <div className="packages-description">
          <p>{props.description}</p>
        </div>
        <div className="packages-description">
          <p>{props.price} $</p>
        </div>
        <AddToCart items={props} />
      </div>
    </div>
  );
}

export default PackageList;
