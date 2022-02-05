import React from "react";
import { Link } from "react-router-dom";
import Manicurelist from "./Manicurelist";
import "./Manicure.css";
function Manicure() {
  const manicureserv = [
    {
      id: "0",
      src: "../img/manicure1.jpg",
      title1: "NAILS SHINE",
      title2: "Manicure",
      price: "$15 ",
    },
    {
      id: "1",
      src: "../img/manicure2.jpg",
      title1: "BEAUTY PEDICURE",
      title2: "Silky Pedicure",
      price: "$20",
    },
    {
      id: "2",
      src: "../img/nailpolish3.jpg",
      title1: "POLISH TREATMENT",
      title2: "Priming Moisturizer",
      price: "$25",
    },
    {
      id: "3",
      src: "../img/manicure4.jpg",
      title1: "COLOR HYDRATATION TREATMENT",
      title2: "Gel Polish Manicure",
      price: "$30",
    },
  ];

  localStorage.setItem("manicureserv", JSON.stringify(manicureserv));

  const nailItemsList = manicureserv.map((element) => {
    return (
      <Manicurelist
        id={element.id}
        src={element.src}
        title1={element.title1}
        description={element.title2}
        price={element.price}
      />
    );
  });

  return (
    <div className="nail-list-container">
      <div className="nail-list">{nailItemsList}</div>
    </div>
  );
}

export default Manicure;
