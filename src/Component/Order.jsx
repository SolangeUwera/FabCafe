// import "../Style/Home.css"
import "../Style/Order.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import pizza from "../assets/10001.jpg";
// import pizza2 from "../assets/10004.jpg"
import pizza3 from "../assets/10006.jpg";
// import pizzadiv from "../assets/10009.jpg"
import { SiAnaconda } from "react-icons/si";
import { Link } from "react-router-dom";
const Order = () => {
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
          <Link to="/chips"> <li>Chips</li></Link>
          <Link to="/sushi"><li>Sushi</li></Link>
          <Link to ="/supageti"><li>Supergeti</li></Link>
        </ul>
      </div>
      <div className="flex-container">
        <div className="pizzadiva">
          <h1 className="burgerdivamenu menu">Menu List</h1>
          <p className="burgerdivpmenu">
            Some informations about our restaurant
          </p>
        </div>

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
              <h1 className="burgermenu">Drinks</h1>
            </div>
            <div className="table2">
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
                </tbody>
              </table>
            </div>
            </div>










          <div>
            <div className="pizzamenu3">
              <img src={pizza} alt="img" />
              <h1 className="burgermenu">Food</h1>
            </div>
            <div className="table2">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
