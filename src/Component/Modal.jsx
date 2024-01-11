
import "../Style/Modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import cofee from "../assets/cofee2.jpg"
const Modal = ({ closeModal }) => {
  const [openModal, setOpenModal] = useState(true);

  const toogleModal = ()=>{
    setOpenModal(!openModal)
  }


  return (
    <div className="modal-container1">
        <img src={cofee} alt="img" width={"180px"} height={"120px"} className="cofee1"/>
      <div className="bottom-container">
        <div className="menu-containerModal">
          <ul>
            <li>
              <Link to="/book" onClick={closeModal}>
                Book
              </Link>
            </li>
            <li>
              <Link to="/order" onClick={closeModal}>
                Order
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeModal}>
               Login
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
      {/* <IoCloseSharp onclick={toogleModal} className=" close "/> */}
    </div>
  );
};

export default Modal;
