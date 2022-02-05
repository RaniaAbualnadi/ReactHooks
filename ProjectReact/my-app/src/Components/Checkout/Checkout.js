import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import "./Checkout.css";
export default function NewPath() {
  const navigate = useNavigate();
  const handelUseNavigate = () => {
    navigate("/");
  };
  return <Checkout handelUseNavigate={handelUseNavigate} />;
}

const Checkout = (props) => {
  const { counter, setCounter } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msgemail, setEmailmsg] = useState("");
  const [msgphoneNumber, setPhoneNumbermsg] = useState("");
  let count = 0;
  const submitHandler = (e) => {
    e.preventDefault();
    setCounter(0);
    localStorage.removeItem("cartKey");
    count = 0;
    if (!email.includes("@")) {
      setEmailmsg("The Email is Not Vaild");
      count = count + 1;
    } else {
      setEmailmsg("");
    }
    if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      setPhoneNumbermsg("Number of Phone must be equal 10 digit");
      count = count + 1;
    } else {
      setPhoneNumbermsg("");
    }
    if (phoneNumber.length === 10 && email.includes("@")) {
      alert("Completed,Thank you for your visit");

      setTimeout(() => {
        props.handelUseNavigate();
      }, 2000);
    }
  };

  return (
    <>
      <div className="CheckoutPageContainer">
        <div className="">
          <form onSubmit={submitHandler} className="form-checkout">
            <div className="form-name">
              <label htmlFor="email">First Name</label>
              <input type="text" placeholder="First name" required id="fname" />
            </div>
            <div className="form-name">
              <label htmlFor="email">Last Name</label>
              <input type="text" placeholder="Last name" required id="lname" />
            </div>
            <div className="form-name">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="you@example.com"
                id="email"
              />
              <p>{msgemail}</p>
            </div>
            <div className="form-name">
              <label htmlFor="phoneNumber">Phone</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder="+962XXXXXXXXX"
                required
                id="phoneNumber"
              />
              <p>{msgphoneNumber}</p>
            </div>
            <div className="form-name">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" required />
            </div>

            <button className="checkout-component-Btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
