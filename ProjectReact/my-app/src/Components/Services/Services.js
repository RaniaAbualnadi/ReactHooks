import React from "react";
import ServicesList from "./ServicesList";
import "./Service.css";

function Services() {
  const ServicesNail = [
    {
      id: "1",
      src: "../img/nail1.png",
      title: "Nail Care",
      description:
        "Lorem ipsum dolor amet, consect risu adipiscing elit do You Can Complete in a Day",
    },
    {
      id: "2",
      src: "../img/nail2.png",
      title: "Nail Art",
      description: "Lorem ipsum dolor amet, consect risu adipiscing elit do",
    },
    {
      id: "3",
      src: "../img/nail3.png",
      title: "Tips and Trends ",
      description: "Lorem ipsum dolor amet, consect risu adipiscing elit do",
    },
  ];
  return (
    <div>
      <section className="service-img"> </section>
      <section className="section-steps">
        <div className="service-list-container">
          {ServicesNail.map((items, index) => {
            return (
              <ServicesList
                key={index}
                src={items.src}
                title={items.title}
                description={items.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;
