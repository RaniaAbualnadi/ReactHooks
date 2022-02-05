import React from "react";
import SignUpButton from "../SignUpButton/SignUpButton";
function Manicurelist(props) {
  return (
    <div className="card-nail">
      <div className="card-Img">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="card-Information">
        <div className="card-Title1">
          <p>{props.title1}</p>
        </div>

        <div className="card-Title2">
          <h4>{props.title2}</h4>
        </div>

        <div className="card-Description">
          <p>{props.description}</p>
        </div>

        <div className="card-Price">
          <p>{props.price}</p>
        </div>

        <div className="card-saveup">
          <p>{props.Saveup}</p>
        </div>

        <SignUpButton obj={props} />
      </div>
    </div>
  );
}

export default Manicurelist;
