import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

export default function NewPath() {
  const navigate = useNavigate();
  const handelUseNavigate = () => {
    navigate("/Login");
  };
  return <Register handelUseNavigate={handelUseNavigate} />;
}

function Register(props) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [massegPassword, setMassegPassword] = useState("");
  const [remassegPassword, setreMassegPassword] = useState("");
  const [massegEmail, setMassegEmail] = useState("");
  const [massegName, setMassegName] = useState("");
  let countLocaleStorge = 0;

  const submit = (e) => {
    e.preventDefault();

    countLocaleStorge = 0;

    if (userName === "") {
      setMassegName("Please enter your name");
      countLocaleStorge = countLocaleStorge + 1;
    } else setMassegName("");

    if (password.length < 6 || password === "") {
      setMassegPassword("The password should be more than 5");
      countLocaleStorge = countLocaleStorge + 1;
    } else setMassegPassword("");

    if (repassword !== password) {
      setreMassegPassword("The password is not matched");
      countLocaleStorge = countLocaleStorge + 1;
    } else setreMassegPassword("");

    if (!email.includes("@")) {
      setMassegEmail("The email is not valid  ");
      countLocaleStorge = countLocaleStorge + 1;
    } else setMassegEmail("");

    if (countLocaleStorge === 0) {
      let infoUser = {
        email: email,
        userName: userName,
        password: password,
      };
      localStorage.setItem(email, JSON.stringify(infoUser));
      alert("Successfully registered");
      props.handelUseNavigate();
    }
  };

  return (
    <div className="register-container">
      <div className="RegisterForm">
        <h2>Create an account</h2>
        <form className="contactRegisterForm">
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
            placeholder="Name"
          />
          <small>{massegName} </small>

          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Email"
          />
          <small>{massegEmail} </small>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <small>{massegPassword} </small>

          <input
            type="password"
            value={repassword}
            onChange={(e) => {
              setRepassword(e.target.value);
            }}
            required
            placeholder="Repeat Password"
          />
          <small>{remassegPassword} </small>

          <button onClick={submit} className="submitRegisterForm">
            Submit
          </button>
        </form>
        <p>
          You have already account ?<Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}
