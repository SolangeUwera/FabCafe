
import '../Style/Footer.css'
// import FootSoup from "../assets/Capture.PNG"
import { SiAnaconda } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Footer() {
 

  return (
    
    <div className="taicon">
          {/* <div><SiAnaconda className="circleIcon"/></div> */}
    <div className="left">

        {/* <img src={FootSoup} alt=""  className='soupfoot'/> */}
        <h1 className='footsou'>Soup</h1>
        </div>

        <div className="middle">
            <Link to="/"><p>Home </p></Link>
            <Link to="/menu"><p>Menu</p> </Link>
            <Link to="/offer"><p>Offer </p></Link>
            <Link to="/login"><p>Login</p></Link>
            <Link to=""> <p>Cart</p></Link>
                
            </div>
     <div className="right">
        <h2 className='sub'>Subscribe Us!</h2>
        <span>
            <input type="email" placeholder="Enter your Email" />
            <button type="submit" className='hii'>Subscribe</button>
          </span>
        <div className="follow">
                {" "}
                <h2> Social Media </h2>
                <span className="here11111">
                  {" "}
                  <SlSocialTwitter className="here1111" />
                  <PiInstagramLogo className="ist" />
                  <SlSocialFacebook className="fcb" />
                  <SlSocialTwitter className="here1111" />
                  <PiInstagramLogo className="ist" />
                  <SlSocialFacebook className="fcb" />
                </span>
              </div>

     </div>
      
   
    </div>
  )
}

export default Footer
