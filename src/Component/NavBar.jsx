// import { TfiEmail } from "react-icons/tfi";
// import { BsTelephone } from "react-icons/bs";
// import { SlSocialTwitter } from "react-icons/sl";
// import { PiInstagramLogo } from "react-icons/pi";
// import { SlSocialFacebook } from "react-icons/sl";
// import { HiOutlineSearchCircle } from "react-icons/hi";
// import { useState } from "react";
// import Modal from "./Modal";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"; 
import "../Style/Navbar.css"

// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

const Navbar = () => {
//   const [openform, setOpenform] = useState(false);
//   function handleClick() {
//     setOpenform(!openform);
//   }

  return (
  <div>
         <div className="menu-container">
          <ul>
            <li>
              <Link to="/" className="linknav">
              {/* // onClick={closeModal} */}
                Home
               </Link> 
            </li>
         
            <li>
              <Link to="/Menu" className="linknav"> 
            
                Menu
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="linknav">
              {/* onClick={closeModal}> */} 
                Gallery
              </Link> 
            </li>
            <li>
             <Link to="/offer" className="linknav" >
              {/* // onClick={closeModal}> */} 
                Offer
               </Link> 
            </li>
            <li>
             <Link to="/login" className="linknav" >
              {/* // onClick={closeModal}> */} 
                Login
               </Link> 
            </li>
            {/* <li>
               <Link to="/order" className="linknav" > */}
               {/* onClick={closeModal} */}
               {/* Order
              </Link>
            </li> */}
            {/* <li> */}
             {/* <Link to="/book" className="linknav"> */}
              {/* // onClick={closeModal} */}
               {/* Book 
              </Link> 
            </li> */}
             
          {/* <li> 
             <Link to="/login" className="linknav"> 
              {/* // onClick={closeModal} 
               Login
              </Link> 
            </li> */}
           <li>
           {/* <Link to="/menuu"><GiHamburgerMenu className="menubar"/></Link>  */}
           </li>  
            <li>
              {/* <Link to="/login" onClick={closeModal}> */}
               Cart
              {/* </Link> */}
            </li>



          </ul>
        </div>
  </div>
  );
};

export default Navbar;
