import React from 'react';
import "../Style/DashBoard.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaChalkboardTeacher } from "react-icons/fa";
import cofee from "../assets/cofeee1.png"
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import { PiAirplaneTiltThin } from "react-icons/pi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import emug from "../assets/mg.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { IoFastFoodOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: '',
        data: [400, 700, 650, 300, 420, 800, 200],
        fill: true,
        borderColor: 'peru',
        tension: 0.1,
      },
    ],
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        title: {
          display: true,
          text: '',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '',
        },
      },
    },
  };

  return <div >
     <aside className="sidebar">
      <div className="sidebar-title">
        <div className="photo-wrap">
          <img src={emug} alt="" className='' />
          <h1 className='photo-wrap1'>Solange UWERA</h1>
          <br /><br />
        </div>
        <br />
        <br />
        <br />
        {/* <h3>Solange</h3> */}
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <TbLayoutDashboard className="icon" /> Dashboard
         
          </Link> 
        </li>
        <li className="sidebar-list-item">
          <Link to="/order">
            <IoFastFoodOutline className="icon" /> Orders
           
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/bookings">
            <BsJournalBookmarkFill className="icon" /> Bookings
          
          </Link>
        </li>
        
        <li className="sidebar-list-item">
          <Link to="/menu">
            <GiHamburgerMenu className="icon" /> Menu
      
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/chefs">
            <LiaChalkboardTeacherSolid  className="icon" /> Chefs
      
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/waiters">
            <FaChalkboardTeacher  className="icon" /> Waiters
      
          </Link>
        </li>



        <li className="sidebar-list-item">
        <div className="sidebar-list-item dwn">
        <button onClick={handleLogOut}>
          <HiOutlineLogout className="icon" />
          LOG OUT
        </button>
        {/* <ToastContainer /> */}
      </div>
        </li>
      </ul>
    
    </aside>
   <div className='graph11'><img src={cofee} alt="img" width={"180px"} height={"120px"} className="cofee1"/></div>
    <div className='graph1'><Line options={options} data={data} />
    </div></div>
 
};

export default LineChart;
