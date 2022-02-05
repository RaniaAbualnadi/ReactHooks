import React from "react";
import PackageList from "./PackageList";
import "./Packages.css";
function Packages() {
  const packages = [
    {
      id: "1",
      src: "../img/bridal.jpg",
      title: "Bridal Packages",
      description: "Lorem ipsum dolor amet, consect risu adipiscing elit do ",
      price: 500,
      quantity: 1,
    },
    {
      id: "2",
      src: "../img/graduate.jpg",
      title: "Graduate Packages",
      description: "Lorem ipsum dolor amet, consect risu adipiscing elit do",
      price: 100,
      quantity: 1,
    },
    {
      id: "3",
      src: "../img/engagment.jpg",
      title: "Engagement Packages",
      description: "Lorem ipsum dolor amet, consect risu adipiscing elit do",
      price: 250,
      quantity: 1,
    },
    {
      id: "4",
      src: "../img/mother.jpg",
      title: "Mother Packages",
      description: "Lorem ipsum dolor amet, consect risu adipiscing elit do",
      price: 150,
      quantity: 1,
    },
  ];
  return (
    <div>
      <section className="packages-section">
        <div className="package-container">
          {packages.map((items, index) => {
            return (
              <PackageList
                key={index}
                id={items.id}
                src={items.src}
                title={items.title}
                description={items.description}
                price={items.price}
                quantity={items.quantity}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Packages;
