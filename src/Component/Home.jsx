import "../Style/Home.css"
import "../Style/Offer.css"
import VIDEO1 from "../assets/video_1.mp4"

import pizza from "../assets/10001.jpg"
import pizza2 from "../assets/supageti3.jpg"
import pizza3 from "../assets/10005.jpg"

import pizzadiv from "../assets/10003.jpg"
import { SiAnaconda } from "react-icons/si";
import { Link } from "react-router-dom"
import Offer from "./Offers"
import Book from "./Book"
import pizzadiv3 from "../assets/image-1.jpg"
import pizzadivr from "../assets/supageti1.jpg"
import pizzadivk from "../assets/Sushi22.jpg"
import { Carousel } from 'react-responsive-carousel';
const Homepage = () => {
  return (
    <>
    
    <div>
      
      <video src={VIDEO1} type="video/mp4" className="homev" autoPlay loop />
      <div className="home1">
      {/* <SiAnaconda className="circleIcon"/> */}

      <h1 className="soup">Soup</h1> <br /><br />
     <h1 className="ganzah1">Best Rwandan Food</h1>
     <h2 className="ganzah11">and use it with your next order!</h2>
     <Link to="/order"><button className="orderbuto">ORDER ONLINE!</button></Link>
     </div>
    
    </div>
    <br /><br /><br /><br /> <br /><br />
    <div className="drinkpic">
    <img src={pizza} alt="img" width={400} height={400} className="imgtaaab0"/>
    <img src={pizza3} alt="img" width={540} height={400} className="imgtaaab2"/><br/>
    <img src={pizzadiv} alt="img" width={540} height={400} className="imgtaaab2"/><br/>
    </div>
    <div className="drinkpic1">
      <h1 className="drinkpic11">Burger</h1>
      <h1 className="drinkpic111">Cake</h1>
      <h1 className="drinkpic1111">Sushi</h1>     
    </div>
{/* <div className="imghomee">
    <div className="pizza">
     <img src={pizza} alt="img"  className="burgerimagee"/>
     <h1 className="burger">Burger</h1>
     </div>
     <div className="pizza2">
     <img src={pizza} alt="img"  className="burgerimagee2"/>
     <h1 className="burger2">Burger</h1>
     </div>
     <div className="pizza3">
     <img src={pizza} alt="img"  className="burgerimagee3"/>
     <h1 className="burger3">Burger</h1>
     </div>
     </div> */}
   {/* <div className="pizzadiv">
   <h1 className="burgerdiv">Special offers</h1>
   <img src={pizzadiv} alt="img"  className="media1"/>
   </div>
   <div className="whitediv">
    <h1 className="headinwhite">Chip Friday</h1>

    <p>10% Off for all dishes</p>
    <p>Only on Friday</p>
    <p>All products</p>
    <p>Online   Order</p>
   </div> */}
   <br />
   <br />
   <br /><br /><br />
   <Carousel className="coursel">
    
                <div className='image1'>
                <h1 className="burgerdivpmenu11">Special Offers</h1>
                <div>
                <div className="pizzadivb">

<img src={pizzadivr} alt="img" width={800} height={500}  className="imgpiz"/>
</div>
<div className="whitediva"> 
 <h1 className="headinwhitea">Free Small Pizza</h1>
 <p>Get free burger from orders higher that $40!</p>
 <p>Only on Weekends</p>
 <p>Order higher that $40</p>

</div> 

              </div>
           
               
                </div>

                <div className='image1'>
                <h1 className="burgerdivpmenu11">Special Offers</h1>
                <div>
                <div className="pizzadivb">

<img src={pizzadivk} alt="img" width={800} height={500}  className="imgpiz"/>
</div>
<div className="whitediva"> 
 <h1 className="headinwhitea">Free Small Pizza</h1>

 <p>Get free burger from orders higher that $40!</p>
 <p>Only on Weekends</p>
 <p>Order higher that $40</p>

</div> 

              </div>
   
                </div>
                <div className='image1'>
                <h1 className="burgerdivpmenu11">Special Offers</h1>
                <div>
                <div className="pizzadivb">

<img src={pizzadiv3} alt="img" width={800} height={500}  className="imgpiz"/>
</div>
<div className="whitediva"> 
 <h1 className="headinwhitea">Free Small Pizza</h1>

 <p>Get free burger from orders higher that $40!</p>
 <p>Only on Weekends</p>
 <p>Order higher that $40</p>

</div> 

              </div>
   
                </div>
                <div className='image1'>
                <h1 className="burgerdivpmenu11">Special Offers</h1>
                <div className="">
                  
                <div className="pizzadivb">

<img src={pizza2} alt="img"   className="imgpiz"/>
</div>
<div className="whitediva"> 
 <h1 className="headinwhitea">Free Small Pizza</h1>

 <p>Get free burger from orders higher that $40!</p>
 <p>Only on Weekends</p>
 <p>Order higher that $40</p>

</div> 

              </div>
   
                </div>
            </Carousel>
            <Book/>
      </>
  );
};

export default Homepage;
