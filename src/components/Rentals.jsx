import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRentals,
  deleteRental,
  rentalUpdate,
} from "../actions/rentalsActionCreator";

function Rentals() {
  const dispatch = useDispatch();
  const rental = useSelector((state) => state.rentalsReducer.rentals);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllRentals());
  }, []);

  const handleReturn = (rentalId) => {
    dispatch(rentalUpdate(rentalId));
    window.location.reload()
    navigate("/rentals");
    console.log(rentalId);
  };

  return (
    <div>
      <div className="p-2">
        <h3 className="text-center my-4">Rentals List</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="col">Title</th>
              <th className="col">DailyRentalRate</th>
              <th className="col">NumberInStock</th>
              <th className="col">Customer Name</th>
              <th className="col">Phone No</th>
              <th className="col">Rental Fee</th>
              <th className="col">Date Out</th>
              <th className="col">Date In</th>
              <th className="col">Return</th>
              <th className="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {rental.map((Rental) => (
              <tr key={Rental._id}>
                <td>{Rental.movie.title}</td>
                <td>{Rental.movie.dailyRentalRate}</td>
                <td>{Rental.movie.numberInStock}</td>
                <td>{Rental.customer.name}</td>
                <td>{Rental.customer.phone}</td>
                <td>{Rental.rentalFee}</td>
                <td>{Rental.dateOut}</td>
                <td>{Rental.dateIn}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleReturn(Rental._id)}
                  >
                    Return
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(deleteRental(Rental._id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <div className="d-flex justify-content-center">
          <Link to="/rentals/newform">
            <button className="btn btn-success">Add Rentals</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rentals;
