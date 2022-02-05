import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calender.css";

export default function NewPath() {
  const navigate = useNavigate();
  const checkLogInUser = localStorage.getItem("uerLogin");
  const handelUseNavigate = () => {
    if (checkLogInUser !== null) navigate("/Checkout");
    else {
      navigate("/Login");
    }
  };
  return <Calender handelUseNavigate={handelUseNavigate} />;
}

function Calender(props) {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  let year = today.getFullYear();

  let minDateValue = year + "-0" + month + "-" + day;
  const [enteredDateFirst, setEnteredDateFirst] = useState({
    enteredDateFirst: minDateValue,
  });

  const [form, setForm] = useState({
    startDate: "",
    time: "",
    id: 0,
  });
  const fullTimeSlots = [
    { text: "Please Select", value: "" },
    { text: "08:00-09:00", value: "08:00-09:00" },
    { text: "09:00-10:00", value: "09:00-10:00" },
    { text: "10:00-11:00", value: "10:00-11:00" },
    { text: "12:00-13:00", value: "12:00-13:00" },
    { text: "13:00-14:00", value: "13:00-14:00 " },
  ];
  const [timeSlots, setTimeSlots] = useState(fullTimeSlots);

  const dateChangeHandlerFirst = (e, attr) => {
    setEnteredDateFirst(e.target.value);
    setForm({ ...form, [attr]: e.target.value });
    setTimeSlots(fullTimeSlots);

    let ourArray = localStorage.getItem("timeOfService")
      ? JSON.parse(localStorage.getItem("timeOfService"))
      : [];
    if (ourArray.length > 0) {
      let filteredArray = ourArray.filter((element) => {
        // get intersection cases.
        let isIntersected = element.startDate === e.target.value;
        return isIntersected;
      });
      if (filteredArray.length === 0) {
        console.log("set full time slot ");
        console.log(fullTimeSlots);
        setTimeSlots(fullTimeSlots);
        return;
      }
      console.log("intersected list");
      console.log(filteredArray);
      // remove intersected periods.
      let resultTimeSlots = timeSlots;
      filteredArray.forEach((element) => {
        let filteredTimes = timeSlots.filter((timeElement) => {
          console.log(timeElement.value + " ---  " + element.time);
          return timeElement.value === element.time;
        });

        console.log("filtered times");
        console.log(filteredTimes);
        // if there is intersected timeslot remove the intersected time
        if (filteredTimes.length > 0) {
          let index = resultTimeSlots.indexOf(filteredTimes[0]);
          resultTimeSlots.splice(index, 1);
        }
      });
      setTimeSlots(resultTimeSlots);
      console.log("result after complete");
      console.log(resultTimeSlots);
    }
  };
  const handelSelect = (e, attr) => {
    setForm({ ...form, [attr]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    // get the saved array from local storage, if no data was saved, create empty array.
    let ourArray = localStorage.getItem("timeOfService")
      ? JSON.parse(localStorage.getItem("timeOfService"))
      : [];

    // *****************
    setForm({ ...form });

    ourArray.push(form);
    localStorage.setItem("timeOfService", JSON.stringify(ourArray));
    const checkLogInUser = localStorage.getItem("uerLogin");
    console.log(checkLogInUser);

    if (checkLogInUser !== null) {
      console.log("go");
      props.handelUseNavigate();
    } else {
      console.log("no");
      props.handelUseNavigate();
    }
    setEnteredDateFirst("");

    setForm({ ...form, time: "" });
  };

  return (
    <div className="calender-controls">
      <form onSubmit={handelSubmit} className="calender-form">
        <div className="label-container">
          <label> Pick a Date</label>
        </div>
        <input
          type="date"
          min={minDateValue}
          max="2026-12-31"
          value={enteredDateFirst}
          onChange={(e) => {
            dateChangeHandlerFirst(e, "startDate");
          }}
          required
        />
        <div>{console.log("min value : " + minDateValue)}</div>
        <div className="label-container">
          <label> Select Time</label>
        </div>
        <select
          className="time-slots-input"
          onChange={(e) => {
            handelSelect(e, "time");
          }}
          required
          value={form.time}
        >
          {timeSlots.map((item) => {
            return <option value={item.value}>{item.text}</option>;
          })}
        </select>
        <button className="submit-calender">Submit </button>
      </form>{" "}
    </div>
  );
}
