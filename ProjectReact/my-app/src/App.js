import React, { createContext, Profiler, useState } from "react";
import "./App.css";
import Login from "./Components/login/Login";
import Register from "./Components/Register/Register";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import OurService from "./Components/OurService/OurService";
import ServicesSection from "./Pages/ServicesSection";
import Packages from "./Components/Packages/Packages";
import CartComponent from "./Components/Carts/CartComponent";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
// import Section2 from "./Components/LandingPage/Section2";
import HomePage from "./Pages/HomePage";
import Profile from "./Components/Profile/Profile";

export const UserContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const [loggedIn, setLoggedIn] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ counter, setCounter }}>
          <Navbar />

          {/* <Section2 /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Login"
              element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            <Route path="/Register" element={<Register />} />
            <Route path="/OurService" element={<OurService />} />
            <Route path="/Services" element={<ServicesSection />} />
            <Route path="/Packages" element={<Packages />} />
            <Route path="/CartComponent" element={<CartComponent />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>

          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
