import React from "react";
import Calender from "../Components/Calender/Calender";
export default function ServiceDetails(props) {
  return (
    <div className="booking-card-All">
      <div className="booking-card-AllImg">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="booking-card-AllInformation">
        <div className="booking-card-AllTitle1">
          <p>{props.title1}</p>
        </div>

        <div className="booking-card-AllTitle2">
          <h4>{props.title2}</h4>
        </div>

        <div className="booking-card-AllDescription">
          <p>{props.description}</p>
        </div>

        <div className="booking-card-AllPrice">
          <p>{props.price}</p>
        </div>

        <div className="booking-card-Allsaveup">
          <p>{props.Saveup}</p>
        </div>
        <div className="calender-booking-container">
          <Calender />
        </div>
      </div>
    </div>
  );
}
