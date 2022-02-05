import React from "react";
import ContactUs from "../Components/Contactus/ContactUs";
import Gridhome from "../Components/Gridspan/Gridhome";
import Section2 from "../Components/LandingPage/Section2";
import Section3 from "../Components/LandingPage/Section3";
import Slider from "../Components/Slider/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <Section2 />
      <Gridhome />
      <Section3 />
      <ContactUs />
    </div>
  );
}

export default HomePage;
