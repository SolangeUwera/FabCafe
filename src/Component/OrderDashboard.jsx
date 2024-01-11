import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import PuffLoader from "react-spinners/PuffLoader";

const OrderDashboard = () => {
  const [orderLoading, setOrderLoading] = useState(false);

  // ============ orders fetchning ============================
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  

  };
  // ============ Delete End =================================
  // ==================  PAGINATION  =========================
  const [orderNumber, setOrderNumber] = useState(0);
  const ordersPerPage = 4;
  const ordersVisited = orderNumber * ordersPerPage;
  const Orders = tableData
    .slice(ordersVisited, ordersVisited + ordersPerPage)
    .map((table) => {
      return (
        <tr>
          <td>
            {table.order}
          </td>
          <td>{table.time}</td>
          <td>{table.Date} </td>
          <td>{table.Size}+ People</td>
          <td> $ {table.Price}</td>
          <td>
            <td>
              <span className="actions">
                <BsFillTrashFill
                  className="delete-btn"
                  onClick={() => handleDelete(table._id)}
                />

                <BsFillPencilFill
                  className="edit-buttonn"
                  onClick={() => navigate(`/dashboard/edittour/${table._id}`)}
                />
              </span>
            </td>
          </td>
        </tr>
      );
    });

  const orderCount = Math.ceil(tableData.length / ordersPerPage);
  const changeOrder = ({ selected }) => {
    setOrderNumber(selected);
  };
  // ==================  PAGINATION  =========================
  return (
    <div>
      <div className="sidebar-right-side">
        <Link to="/dashboard/orderform">
          <button className="Add-tour-btn">+ Add Book</button>
        </Link>
        {tourLoading ? (
          <PuffLoader className="circle-loader" color="#f58e00" size="340" />
        ) : (
          <div className="table-component">
            <table class="table">
              <thead>
                <tr>
                  <th>What Ordered</th>
                  <th>When needed</th>
                  <th>Duration</th>
                  <th>how many plate</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody> {displayOrders} </tbody>
            </table>
            <div className="downn">
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={tourCount}
                onPageChange={changeTour}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"pageDisabled"}
                activeClassName={"activePage"}
              />
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );


export default OrderDashboard;
