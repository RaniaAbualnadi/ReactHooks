import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, useerrorMessage] = useState();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    for (let i = 0; i <= localStorage.length; i++) {
      const emailLocalstorge = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      );
      console.log(emailLocalstorge);

      if (
        emailLocalstorge.email === email &&
        emailLocalstorge.password === password
      ) {
        console.log("login TTTTTTT ");

        localStorage.setItem("uerLogin", JSON.stringify(emailLocalstorge));
        alert("successful login");

        props.setLoggedIn(true);
        console.log(props.loggedInstate);
        navigate("/");
      } else {
        useerrorMessage("The Email  or password incorrect !!");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="LogInForm">
        <form className="contactLogInForm">
          <h3>Sign in</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <small>{errorMessage} </small>

          <button onClick={submit} className="submitLoginForm">
            Submit
          </button>
        </form>
        <p className="LoginFormMessage">
          You dont have already account ?<Link to="/register"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
