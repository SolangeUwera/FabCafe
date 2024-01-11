import "../Style/BookForm.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";


const BOOKTABLE = () => {
  const navigate = useNavigate();
  const [fullNames, setFullNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");

  const handlebookatable = (e) => {
    e.preventDefault();
  
    
  };

  return (
    <div className="sl-container">
      <form className="sl-form">
        <div className="boofohead">
        <BsJournalBookmarkFill className="iconfi" />
        <h1 className="booking">Booking a table</h1><br />
        <h2 className="booking1">Details about your reservation</h2>
        </div>
       

        <main>
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
            placeholder=""
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
            placeholder=""
          />
        </div>
        <div className="flex-column">
          <label>Phone number </label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setphone(e.target.value);
            }}
            type="number"
            className="sl-input"
            placeholder=""
          />
        </div>
        </main>

        <button onClick={(e) => handlebookatable(e)} className="sl-button-submit" type="submit">
         
            Make Reservation
         
        </button>

        
      </form>
      
    </div>
  );
};

export default BOOKTABLE;
