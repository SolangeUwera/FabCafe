// import "../Style/Home.css"
import "../Style/Order.css";
import "../Style/Pizza.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import pizza3 from "../assets/image-1.jpg";
// import pizza2 from "../assets/10004.jpg"
import pizza from "../assets/10002.jpg";
import pizza2 from "../assets/10008.jpg";
// import pizzadiv from "../assets/10009.jpg"
import { SiAnaconda } from "react-icons/si";
import { Link } from "react-router-dom";
const Pizza = () => {
  return (
    <div className="flediv">
      {/* <div className="leftOmenu">
          <SiAnaconda className="circleIcon1menu"/>
        <img src={pizza3} alt=""  className='soupfoot'/>
        <h1 className='footsoumenu'>Soup</h1>
        </div> */}
      <div className="blakNav">
        <ul>
          <Link to="/burger">
            <li>Burger</li>
          </Link>
          <Link to="/pizza">
            <li>Pizza</li>
          </Link>
          <Link to="/chip"> <li>Chips</li></Link>
          <Link to="/sushi"><li>Sushi</li></Link>
          <Link to ="/supageti"><li>Supergeti</li></Link>
        </ul>
      </div>
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
            <div className="pizzamenu2">
              <img src={pizza3} alt="img" />
              {/* <h1 className="burgermenu1">Drinks</h1> */}
            </div>
            <div className="table211">
              <table>
                <tbody>
                  <tr>
                    <td className="tableleft">
                     Larger Pizza <br />
                      Pizza with green and red vegetable
                    </td>
                    <td className="tableright"> $15.00</td>
                    <td>
                    <Link to="/cart"><button className="addtablecart">Add To Cart</button></Link>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <div className="table211">
              <table>
                <tbody className="tbody1">
            
                  <tr>
                    <td className="tableleft">
                    Small Pizza <br />
                      Pizza with green and red vegetable
                    </td>
                    <td className="tableright"> $8.00</td>
                    <td>
                    <Link to="/cart"> <button className="addtablecart">Add To Cart</button></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>

<div>
            <div className="pizzamenu2">
              <img src={pizza2} alt="img" />
              {/* <h1 className="burgermenu1">Drinks</h1> */}
            </div>
            <div className="table211">
              <table>
                <tbody>
                  <tr>
                    <td className="tableleft">
                      Pizza with carot and black f <br />
                      Larger Pizza
                    </td>
                    <td className="tableright"> $13.00</td>
                    <td>
                    <Link to="/cart"><button className="addtablecart">Add To Cart</button></Link>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <div className="table211">
              <table>
                <tbody className="tbody1">
            
                  <tr>
                    <td className="tableleft">
                    Pizza with carot and black f <br />
                      Larger Pizza
                    </td>
                    <td className="tableright">$9.00</td>
                    <td>
                    <Link to="/cart"> <button className="addtablecart">Add To Cart</button></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>










          <div>
            <div className="pizzamenu3">
              <img src={pizza} alt="img"  height={50} className="pizimage"/>
              {/* <h1 className="burgermenu1">Foods</h1> */}
            </div>
            <div className="table211">
              <table>
                <tbody className="tbody1">
            
                  <tr>
                    <td className="tableleft">
                      Pizza with green p, green choux.. <br />
                      Larger Pizza
                    </td>
                    <td className="tableright"> $15.00</td>
                    <td>
                    <Link to="/cart"><button className="addtablecart">Add To Cart</button></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table211">
              <table>
                <tbody className="tbody1">
            
                  <tr>
                    <td className="tableleft">
                    Pizza with green p, green choux.. <br />
                      Small Pizza
                    </td>
                    <td className="tableright">from $9.00</td>
                    <td>
                    <Link to="/cart"> <button className="addtablecart">Add To Cart</button></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
