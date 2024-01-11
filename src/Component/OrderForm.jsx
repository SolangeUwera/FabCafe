import "../Style/Signup.css";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
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
        <tr>
      <CgProfile className="iconv"/>
        <h1 className="loginh11">Basic information</h1>
        </tr>
<tr>
        <div className="flex-column">
          <label>Full Names</label>
        </div>
        <div className="sl-inputForm11">
          <input
            onChange={(e) => {
              e.preventDefault();
              setFullNames(e.target.value);
            }}
            type="text"
            className="sl-input"
            placeholder=""
          />
        </div>

        <div className="flex-column">
          <label>Email Adress</label>
        </div>
        <div className="sl-inputForm11">
          <input
            required
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            type="email"
            className="sl-input"
            placeholder=""
          />
        </div>
        <div className="flex-column">
          <label>Sreet and Number </label>
        </div>
        <div className="sl-inputForm11">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="password"
            className="sl-input"
            placeholder=""
          />

          
        </div>


        <div className="flex-column">
          <label>City </label>
        </div>
        <div className="sl-inputForm11">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="string"
            className="sl-input"
            placeholder=""
          />

          
        </div>

</tr>
        <button onClick={(e) => handleSignup(e)} className="sl-button-submit1">
          {isLoading ? (
            <PulseLoader color="#c29d59bf" className="loader" />
          ) : (
            "ORDER NOW"
          )}
        </button>

       
      </form>
      
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Sign;
