import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function NewPath() {
  const navigate = useNavigate();
  const handelUseNavigate = () => {
    localStorage.getItem("uerLogin") ? navigate("/") : navigate("/OurCourse ");
  };
  return <Navbar handelUseNavigate={handelUseNavigate} />;
}
function Navbar(props) {
  const { counter, setCounter } = useContext(UserContext);

  let isLoggedIn = localStorage.getItem("uerLogin");
  const logOut = () => {
    localStorage.removeItem("uerLogin");
    localStorage.removeItem("cartKey");
    setCounter(0);
    props.handelUseNavigate();
  };
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbarMainSection">
        <div className="container-one">
          <Link to="/">
            {" "}
            <img className="logoImg" src="../img/logo.png" alt="logo" />
          </Link>

          <div className={click ? "nav-list active" : "nav-list"}>
            <ul className="navbarList">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleClick}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Packages"
                      onClick={handleClick}
                    >
                      Packages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Services"
                      onClick={handleClick}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <button className="loginButton" onClick={handleClick}>
                        Login
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/" onClick={handleClick}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Packages"
                      onClick={handleClick}
                    >
                      Packages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Services"
                      onClick={handleClick}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Profile"
                      onClick={handleClick}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className={click ? "nav-item active" : "nav-item"}>
                    <Link
                      className="logoutButton"
                      to="/CartComponent"
                      onClick={handleClick}
                    >
                      <ShoppingCart />
                    </Link>
                  </li>
                  <li>
                    <Link className="logoutButton" to="/" onClick={logOut}>
                      <button className="logoutButton"> Logout</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={!click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
