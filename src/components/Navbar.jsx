import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  bg-dark">
          <div className="container-fluid ">
           
            <Link className="navbar-brand text-white" to="/">MovieRentals.com </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                 <Link className="nav-link text-white " to="/genres">Genre</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link text-white" to="/movies">Movies</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link text-white" to="/customers">Customers</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link text-white" to="/rentals">Rentals</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
      </>
    );
  }
}

export default Navbar;
