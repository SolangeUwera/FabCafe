import "../Style/Signup.css";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PulseLoader from "react-spinners/PulseLoader";

const Sign = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [fullNames, setFullNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
   
  };

  return (
    <div className="sl-container">
      <form className="sl-form">
        <h1 className="loginh">Sign Up</h1>

        <div className="flex-column">
          <label>Full Names</label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setFullNames(e.target.value);
            }}
            type="text"
            className="sl-input"
            placeholder="Example(Solange UWERA)"
          />
        </div>

        <div className="flex-column">
          <label>Email Adress</label>
        </div>
        <div className="sl-inputForm">
          <input
            required
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            type="email"
            className="sl-input"
            placeholder="Example(usolange13@gmail.com)"
          />
        </div>
        <div className="flex-column">
          <label>Phone Number </label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="password"
            className="sl-input"
            placeholder="Enter 6 character or more"
          />

          
        </div>


        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="string"
            className="sl-input"
            placeholder="Enter your phone number"
          />

          
        </div>


        <button onClick={(e) => handleSignup(e)} className="sl-button-submit">
          {isLoading ? (
            <PulseLoader color="#c29d59bf" className="loader" />
          ) : (
            "SIGN UP"
          )}
        </button>

        <div className="flex-row">
          <button className="sl-btn google">
            <FcGoogle />
            Google
          </button>
          <button className="sl-btn facebook">
            <CgFacebook />
            Facebook
          </button>
        </div>
      </form>
      
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Sign;
