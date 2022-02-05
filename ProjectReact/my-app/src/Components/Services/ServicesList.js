import React from "react";

function ServicesList(props) {
  return (
    <div className="service-item">
      <div className="nail-img">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="nail-title">
        <h4>{props.title}</h4>
      </div>
      <div className="nail-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ServicesList;
