import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { addUsers } from "../actions/registerActionCreator";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().min(5).max(50).required(),
  email: yup.string().email().min(5).max(255).required(),
  password: yup.string().min(5).max(1024).required(),
  isAdmin: yup.boolean(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
 const navigate = useNavigate()


  const onSubmitHandler = (data) => {
      dispatch(addUsers(data));
      navigate("/login")
        
    console.log(data);
  };
  return (
    <div className="container-fluid">
    
      <div className="container">
        <div className="row m-5 rounded shadow-lg">
          <div className="col-md-6 d-none d-md-block mt-5">
            <input type="image" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1684316379~exp=1684316979~hmac=91b3ab288a1648cd2a7e8d0bbd4ba69aedfd1d514f1160f50a4ea25e168ab544"  className="img-fluid h-80" alt="image"/>
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Register Form</h3>
            <div className="form-style">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-group pb-3">
                  <label htmlFor="exampleInputname" className="form-label">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="nameHelp"
                    placeholder="Name"
                  />
                  <p>{errors.name?.message}</p>
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="exampleInputpassword" className="form-label">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    id="exampleInputpassword"
                    aria-describedby="passwordHelp"
                    placeholder="Password"
                  />
                  <p>{errors.password?.message}</p>
                </div>
               
                <div className="d-flex align-items-center">
                  <input name="" type="checkbox" value="" {...register("isAdmin")}/>{" "}
                  <span className="pl-2 mx-1"> <b>Is Admin</b></span>
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                  >
                    Submit
                  </button>
                  <div id="alreadyuser" className="form-text m-2 text-xl">
                    <span>
                      Already Registered <Link to="/login">Login Here</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
