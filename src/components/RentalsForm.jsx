import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../actions/moviesActionCreator";
import { getAllCustomers } from "../actions/customerActionCreato";
import { addRentals, getAllRentals, rentalUpdate } from "../actions/rentalsActionCreator";

const schema = yup.object({
  movieId: yup.string().required(),
  customerId: yup.string().required(),
});

function RentalsForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const rentalsId = params.id;

  const movies = useSelector((state) => state.movieReducer.movies);
  const customers = useSelector((state) => state.customerReducer.customers);
  const rentals = useSelector((state) => state.rentalsReducer.rentals);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
     resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getAllCustomers());
    dispatch(getAllRentals());

    if (!rentalsId) return;
    const rental = rentals.find((m) => m._id === rentalsId);
    if (!rental) return;

    setValue("movieId", rental.movie._id);
    setValue("customerId", rental.customer._id);
  }, []);

  const onSubmitHandler = (data) => {
    if (data._id) {
      dispatch(rentalUpdate(data));
    console.log(data);

    } else {
      // data._id = new Date().
      // dispatch(addGenre(data));
    dispatch(addRentals(data));

    }
  
     navigate("/rentals")

    console.log(data);
  };
  return (
    <>
     
      <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg  rounded m-5 p-5">
            <h3 className="text-center">Add Rentals</h3>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form-floating">
            <select
              required
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              {...register("movieId")}
            >
              
              {movies.map((Movie) => (
                <option key={Movie._id} value={Movie._id}>
                  {Movie.title}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">Select Movie</label>
          </div>
          <div className="form-floating mt-5">
            <select
              required
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              {...register("customerId")}
            >
            
              {customers.map((Customer) => (
                <option key={Customer._id} value={Customer._id}>
                  {Customer.name}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">Select Customer</label>
          </div>
              <div className="d-flex justify-content-center mt-2 mb-3">
                <button
                  type="submit"
                  className="btn btn-info px-4 text-white mt-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RentalsForm;
