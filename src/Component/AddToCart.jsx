// import "../Style/Home.css"
import "../Style/Order.css";
import "../Style/Pizza.css";
import "../Style/AddToCart.css"
import NavBar from "./NavBar";
import Footer from "./Footer";
import pizza from "../assets/burger1.jpg";
// import pizza2 from "../assets/10004.jpg"
import pizza3 from "../assets/burger3.jpg";
import pizza2 from "../assets/10007.jpg";
// import pizzadiv from "../assets/10009.jpg"
import { SiAnaconda } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const AddToCart = () => {
  
  const handlebookatable = (e) => {
    e.preventDefault();
  
    
  };
  return (
    <div className="flediv">
      {/* <div className="leftOmenu">
          <SiAnaconda className="circleIcon1menu"/>
        <img src={pizza3} alt=""  className='soupfoot'/>
        <h1 className='footsoumenu'>Soup</h1>
        </div> */}
      
      <div className="flex-container">

        <div>
          {/* <div className="pizzamenu2">
            <img src={pizza3} alt="img" width={"200%"}/>
            <h1 className="burgermenu">Drink!!</h1>
          </div> */}

          {/* <div className="table">
            <table>
              <tbody>
                <tr>
                  <td className="tableleft">
                    Beef Burger <br />
                    Beef, cheese, potato, onion, fries
                  </td>
                  <td className="tableright">from $9.00</td>
                  <td>
                    <button className="addtablecart">Add To Cart</button>
                  </td>
                </tr>
                <tr>
                  <td className="tableleft">
                    Beef Burger <br />
                    Beef, cheese, potato, onion, fries
                  </td>
                  <td className="tableright">from $9.00</td>
                  <td>
                    <button className="addtablecart">Add To Cart</button>
                  </td>
                </tr>
                <tr>
                  <td className="tableleft">
                    Beef Burger <br />
                    Beef, cheese, potato, onion, fries
                  </td>
                  <td className="tableright">from $9.00</td>
                  <td>
                    <button className="addtablecart">Add To Cart</button>
                  </td>
                </tr>
                <tr>
                  <td className="tableleft">
                    Beef Burger <br />
                    Beef, cheese, potato, onion, fries
                  </td>
                  <td className="tableright">from $9.00</td>
                  <td>
                    <button className="addtablecart">Add To Cart</button>
                  </td>
                </tr>
                <tr>
                  <td className="tableleft">
                    Beef Burger <br />
                    Beef, cheese, potato, onion, fries
                  </td>
                  <td className="tableright">from $9.00</td>
                  <td>
                    <button className="addtablecart">Add To Cart</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div>
            
            <div className="table2111
            ">
              <h1 className="addtohead">Your Cart</h1>
              <table>
                <tbody className="tbody1">
            
                  <tr>
                    <td className="tableleft">
                      Beef Burger <br />
                      Beef, cheese, potato, onion, fries <br />
                      <br /></td>
                    <td className="tableright">
                      $12.00</td>
                      <td className=""><MdEdit /> <MdDelete /></td>
                    </tr>
                    {/* <tr>
                    <td className="tableleft">
                    <FaRegCircle className="iconcircl"/>Size
                    </td>
                   </tr>
                   <tr>
                    <td className="tableleft">
                    <FaRegCircle className="iconcircl" />Normal <br />
                    <FaRegCircle className="iconcircl" />Double
                    </td>
                    </tr>
                    <tr>
                    <td className="tableleft">
                    <FaRegCircle className="iconcircl"/> Additions <br />
                     </td>
                     </tr>
                     <tr>
                    <td className="tableleft">
                    <FaRegCircle className="iconcircl"/>Other <br />
                     </td>
                     </tr> */}
                     <tr>
                    <td className="tableleft">
                      Beef Burger <br />
                      Beef, cheese, potato, onion, fries <br />
                      <br /></td>
                    <td className="tableright">
                      $12.00</td>
                      <td className=""><MdEdit /> <MdDelete /></td>
                    </tr>
                    <tr></tr>
                    <tr>
                    <td className="tableleft">
                      Beef Burger <br />
                      Beef, cheese, potato, onion, fries <br />
                      <br /></td>
                    <td className="tableright">
                      $12.00</td>
                      <td className=""><MdEdit /> <MdDelete /></td>
                    </tr>
                    <tr></tr>
                    <tr>
                    <td>
                    <Link to="/orderform" ><button  className="sl-button-submit12" type="submit">
         
                   GO TO CHECKOUT
            
                   </button></Link>
                   </td>
                   </tr>
                </tbody>
              </table>
            </div>
            </div>



          <div>
          
            
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
