import "../Style/Login.css";
import "../Style/Signup.css";
import { Link } from "react-router-dom";
import { CgFacebook,  } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PulseLoader from "react-spinners/PulseLoader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [emaiil, setEmaiil] = useState("");
  const [passworrd, setPassworrd] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    setIsLoading(true);

  };

  return (
    <div className="l-container">
      <form className="l-form">
        <h1 className="loginh">Login</h1>
        <p className="l-p">
          you don't have an account? if yes please{" "}
          <Link to="/signup" className="l-span">
            SignUp
          </Link>
        </p>
        <div className="flex-column">
          <label>Email Adress</label>
        </div>

        <div className="l-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setEmaiil(e.target.value);
            }}
            type="text"
            className="l-input"
            placeholder="Example(usolange13@gmail.com)"
          />
        </div>



        <div className="flex-column">
          <label>Password </label>
          <Link className="l-spanp">Forgot password?</Link>
        </div>
        <div className="l-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassworrd(e.target.value);
            }}
            type="password"
            className="l-input"
            placeholder="Enter 6 character or more"
          />
        </div>

        <button onClick={(e) => handleSignin(e)} className="l-button-submit">
          {isLoading ? (
            <PulseLoader color="#c29d59bf" className="loader" />
          ) : (
            "LOGIN"
          )}
        </button>

        <div className="flex-row">
          <button className="l-btn google">
            <FcGoogle />
            Google
          </button>
          <button className="l-btn facebook">
            <CgFacebook />
            Facebook
          </button>
        </div>
      </form>
     
      <ToastContainer />
    </div>
  );
};

export default Login;
