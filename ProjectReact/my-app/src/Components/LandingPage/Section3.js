import React from "react";
import "./Section3.css";
import { Link } from "react-router-dom";
function Section3() {
  return (
    <div className="section3-container">
      <div className="div-section"> Join us</div>
      <div className="div-section">
        <span>and Enjoy Our Services</span>
      </div>
      <Link to="/Register">
        {" "}
        <button className="div-join-us"> Join us now</button>
      </Link>
    </div>
  );
}

export default Section3;
