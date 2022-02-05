import { Link } from "react-router-dom";

export default function SignUpButton(props) {
  const handelClickSignUp = () => {
    const obj1 = props.obj;
    localStorage.setItem("servicesOptions", JSON.stringify(obj1));
  };

  return (
    <div className="SignUpDiv">
      <Link to="/OurService">
        <button className="book-now-button" onClick={handelClickSignUp}>
          Book Now
        </button>
      </Link>
    </div>
  );
}
