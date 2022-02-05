import React from "react";

import "./contactus.css";

function ContactUs() {
  const handelSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message, we will contact with you soon.");
    e.target.reset();
  };
  return (
    <>
      <div className="contactContainer">
        <div className=" secondContactContainer">
          <div className="contact-form-div">
            <form onSubmit={handelSubmit}>
              <h3>STAY IN TOUCH</h3>
              <input
                type="text"
                placeholder="Your name"
                className="btn"
                required
              />
              <br />
              <input
                type="email"
                placeholder="you@example.com"
                className="btn"
                required
              />
              <br />
              <textarea
                className="text-area"
                placeholder="Tell us..."
                required
              ></textarea>
              <br />
              <button className="btn customFormSend">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
