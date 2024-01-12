import "../Style/Book.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
// import VIDEO from "../assets/VIDEO.mp4"
import Table from "../assets/10007.jpg"
import BOOKTABLE from "../Pages/BookForm";
import { Link } from "react-router-dom";

// import pizzadiv from "../assets/10009.jpg"
// import { SiAnaconda } from "react-icons/si";
const Book = () => {
  return (
<div>
    <div className="booktable">
      <div className="headandparag">
    <h1 className="headtablebook"> Would you like to visit Us</h1>
    <p className="partablehead">Book a table right now or make order online</p>
    </div>
    <div className="butota">
    <Link to="/orderOnline"><button className="butotable">Order Online </button></Link>
    <Link to="/bookform"><button className="butotable2" >Book a Table </button> </Link>
    </div>
      <div className="imagebook">

    </div>
   </div> 
    </div>
  );
};

export default Book;
