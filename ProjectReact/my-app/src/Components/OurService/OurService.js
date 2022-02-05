import React from "react";
import ServiceDetails from "../../Pages/ServiceDetails";
import "./OurService.css";

function OurService(props) {
  const servicesOptions = localStorage.getItem("servicesOptions")
    ? JSON.parse(localStorage.getItem("servicesOptions"))
    : [];

  console.log(servicesOptions);

  console.log(servicesOptions.id);
  console.log(servicesOptions.title1);

  return (
    <div>
      <div className="our-service-booking">
        <h1>Our Service</h1>
      </div>
      <div className="book-service-card">
        <div className="  ">
          <ServiceDetails
            id={servicesOptions.id}
            src={servicesOptions.src}
            title1={servicesOptions.title1}
            description={servicesOptions.description}
            price={servicesOptions.price}
          />
        </div>
      </div>
    </div>
  );
}

export default OurService;
