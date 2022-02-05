import React from "react";

import "./Profile.css";

const Profile = () => {
  const loggedUser = JSON.parse(localStorage.getItem("uerLogin"));

  let bookingstable = null;
  if (localStorage.getItem("cartKey")) {
    let bookings = JSON.parse(localStorage.getItem("cartKey"));
    bookingstable = (
      <div className="customProfile">
        {bookings.map((booking, id) => {
          return (
            <div className="booking-item-content">
              <div>{bookings[id].title}</div>
              <div>{bookings[id].price}</div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="profile-main-container">
      <div className="profile-sub-container">
        <div className="profile-side-section">
          <div className="top-part"> {`Hello ${loggedUser.userName} `} </div>
          <div className="bottom-part">
            <div className="profile-img-container">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/man+person+profile+user+worker+icon-1320190557331309792.png"
                alt="person logo"
                width={130}
                className="imgclass"
              />
            </div>
            <div className="profile-info-container">
              <h5 className="profile-subtitle">User Profile:</h5>
              <div className="rounded shadow-sm bg-light">
                <p className="font-italic  ">
                  Name: {`${loggedUser.userName}`}
                </p>
                <p className="font-italic">Email: {loggedUser.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coloum-booking">
          <h5 className="heading-profile">Your Bookings:</h5>

          {bookingstable}
        </div>
      </div>
    </div>
  );
};

export default Profile;
