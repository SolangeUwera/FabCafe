import "../Style/Offer.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { SiAnaconda } from "react-icons/si";
import pizzadiv from "../assets/image-1.jpg"
import pizzadiv2 from "../assets/10002.jpg"
import pizzadiv3 from "../assets/supageti3.jpg"

const Offer = () => {
  return (
<div className="offerdiv">

<div className="pizzadiva">
          <h1 className="burgerdivpmenu1">Special Offers</h1>
          <br /><br /><br />
          {/* <h1 className="paragraph2">
            Some informations about our restaurant
          </h1> */}
        </div>
 
    {/* <SiAnaconda className="circleIcon1"/> */}
        {/* <img src={FootSoup} alt=""  className='soupfoot'/> */}
        {/* <h1 className='footsou'>Soup</h1> */}
        
        <div className="special">
   {/* <div className="pizzadiva">
   <h1 className="burgerdiva">Special offers</h1>
   <p className="burgerdivp">Some informations about our restaurant</p>
   <img src={pizzadiv} alt="img" width={700} height={500}  className="imgpiz"/>
   </div>
 <div className="whitediva"> 
    <h1 className="headinwhitea">Chip Friday</h1>

    <p>10% Off for all dishes</p>
    <p>Only on Friday</p>
    <p>All products</p>
    <p>Online   Order</p>
   </div>  */}


   <div className="pizzadivb">

   <img src={pizzadiv} alt="img" width={800} height={500}  className="imgpiz"/>
   </div>
 <div className="whitediva"> 
    <h1 className="headinwhitea">Free Small Pizza</h1>

    <p>Get free burger from orders higher that $40!</p>
    <p>Only on Weekends</p>
    <p>Order higher that $40</p>
  
   </div> 


   <div className="pizzadivc">
  
  <img src={pizzadiv2} alt="img" width={900} height={500}  className="imgpiz"/>
  </div>
<div className="whitediva"> 
   <h1 className="headinwhitea">Free Burger</h1>

   <p>Get free burger from orders higher that $40!</p>
   <p>Only on Tuesdays</p>
   <p>Order higher that $40</p>
   <p>Unless one burger ordered</p>
  </div> 




  <div className="pizzadivc">
  
  <img src={pizzadiv3} alt="img" width={900} height={500}  className="imgpiz"/>
  </div>
<div className="whitediva"> 
   <h1 className="headinwhitea">Free plate of Supageti</h1>

   <p>Get free burger from orders higher that $40!</p>
   <p>Only on Tuesdays</p>
   <p>Order higher that $40</p>
   <p>Unless one burger ordered</p>
  </div> 

  </div>




  </div>


    
  );
};

export default Offer;
