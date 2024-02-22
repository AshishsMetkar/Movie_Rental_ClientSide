import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/loginActionCreator";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  email: yup.string().email().min(5).max(255).required(),
  password: yup.string().min(5).max(1024).required(),
  
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data));
    navigate("/genres")
    console.log({ data });
   
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row m-5 rounded shadow-lg">
          
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Login Form</h3>
            <div className="form-style">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
        
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
                    id="exampleInputpassword1"
                    aria-describedby="passwordHelp"
                    placeholder="Password"
                  />
                  <p>{errors.password?.message}</p>
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
                      Don't Have An Account <Link to="/register">Register Here</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <input type="image" src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1684316670~exp=1684317270~hmac=79d53ff0fc69e8513db9b589a5a817a6ce46e884ea6fc7af8429cfd0dc3dbef0"  className="img-fluid h-80" alt="image"/>
          </div>
        </div>
      </div>
     

    </div>
    
  );
};

export default Login;
