import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
function Slider() {
  const [arrayOfImage, setArrayOfImage] = useState([
    "https://img.grouponcdn.com/deal/vxReoZ7j6An53bogPeHewp/96303538-2048x1229/v1/c870x524.jpg",
    "https://media.istockphoto.com/photos/asian-bride-with-flower-bouquet-picture-id1187074682?k=20&m=1187074682&s=170667a&w=0&h=Ab_1__uQZSODOF0k09VW8wwvyRtrcG4clDT300aFPmc=",
    "https://s3.amazonaws.com/salonclouds-uploads/blog/blog_15423357701893930099.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setTimeout(() => {
      let index = (currentIndex + 1) % arrayOfImage.length;
      setCurrentIndex(index);
    }, 5000);
  };
  nextImage();
  //   useEffect(
  //     setInterval(() => {
  //       let index = (currentIndex + 1) % (arrayOfImage.length - 1);
  //       setCurrentIndex(index);
  //     }, 3000),
  //     []
  //   );

  return (
    <div
      className="heroImageContainer"
      style={{ backgroundImage: "url(" + arrayOfImage[currentIndex] + ")" }}
    ></div>
  );
}
export default Slider;
