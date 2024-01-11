
// import './App.css'
// import Navbar from './Component/NavBar'
import Homepage from "./Component/Home"
import Footer from './Component/Footer'
import Offer from './Component/Offers';
// import Gallery from './Component/Gallery'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Menu from './Component/Menu'
import Book from './Component/Book';
import Order from './Component/Order';
import BOOKTABLE from './Pages/BookForm';
import Navbar from './Component/NavBar';
import Login from "./Component/Login";
import Sign from "./Component/Signup";
import Modal from "./Component/Modal";
import DashMain from "./Component/DashMain";
import Waiters from "./Component/Waiters";
import Gallery from "./Component/Gallery";
import Chefs from "./Component/Chefs";
import Bookings from "./Component/Bookings";
import Pizza from "./Component/Pizza";
import Sushi from "./Component/Sushi";
import Burger from "./Component/Burger";
import Chips from "./Component/Chips";
import Supageti from "./Component/Supageti";
import AddToCart from "./Component/AddToCart";
import OrderForm from "./Component/OrderForm";





const Homelayout = ()=>{

return (
  <div style={{
    flex: 1,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: 'space-between'
  }}>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </div>
)}

function App() {

  return (
      <>
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Homelayout/>} >

<Route path="/" element={<Homepage />} />
 <Route path="/Menu" element={<Menu />} />
 <Route path="/offer" element={<Offer />} />
 <Route path="/gallery" element={<Gallery />} /> 
 <Route path="/book" element={<Book />} />
 <Route path="/order" element={<Order />} />
 <Route path="/bookform" element={< BOOKTABLE/>} />
 <Route path="/orderOnline" element={<Menu/>} />
 <Route path="/burger" element={<Burger/>} />
 <Route path="/login" element={<Login/>} />
 <Route path="/signup" element={<Sign/>} />
 <Route path="/menuu" element={<Modal/>} />
 <Route path="/chefs" element={<Chefs/>} />
 <Route path="/waiters" element={<Chefs/>} />
 <Route path="/sushi" element={<Sushi/>} />
 <Route path="/pizza" element={<Pizza/>} />
 <Route path="/chip" element={<Chips/>} />
 <Route path="/supageti" element={<Supageti/>} />
 <Route path="/cart" element={<AddToCart/>} />
 <Route path="/orderform" element={<OrderForm/>} />
 
 <Route path="/burger" element={<Burger/>} />
 <Route path="/bookings" element={<Bookings/>} />
 </Route>
 <Route path="/dashboard" element={<DashMain/>} >


  </Route>

 </Routes>
 </BrowserRouter>

     
      </>
     
  )
}

export default App
