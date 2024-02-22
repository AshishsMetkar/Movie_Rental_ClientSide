import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
// import { getCustomers } from "../services/fakeCustomerSevice";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, getCustomerByID, updateCustomer } from "../actions/customerActionCreato";

const schema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
  phone :yup.string().min(7).max(10).required(),
  isGold:yup.boolean()
});

const CustomersNew = () => {
  const params = useParams();
  const customerId = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
  });

const navigate = useNavigate()
  const dispatch = useDispatch();
  const customerById = useSelector((state) => state.customerReducer.currentCustomer);
  
  console.log(customerById);
  
  useEffect(()=>{
    if(!customerId) return;
    // const customer = customers.find((c)=>c._id===customerId)
    dispatch(getCustomerByID(customerId))
    if(!customerById) return;
    setValue("_id",customerById?._id)
    setValue("name",customerById.name)
    setValue("phone",customerById.phone)
    setValue("isGold",customerById.isGold)
  },[customerById?._id,dispatch,setValue])

  const onSubmitHandler = (data) => {
    // console.log({ data });
    if (data._id) {
      dispatch(updateCustomer(data));
      // console.log(data);
    } else {
      dispatch(addCustomer(data));
    }
     navigate("/customers")
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg rounded m-5 p-5">
            <h3 className="text-center">Add Customers</h3>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className={`form-control`}
                  id="exampleInputName"
                  placeholder="name"
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputNIS">Phone</label>
                  <input
                    {...register("phone")}
                    type="text"
                    className={"form-control"}
                    id="exampleInputphone"
                    placeholder="phone number"
                    
                  />
                 <p>{errors.phone?.message}</p>
                </div>
                <div className="form-group form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkLiked"
                    {...register("isGold")}
                  />
                  <label className="form-check-label" htmlFor="checkLiked">
                    Is Gold
                  </label>
                </div>
              <div className="d-flex justify-content-center mt-2 mb-3">
                <button type="submit" className="btn btn-info px-4 text-white mt-4">
                Sumbit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersNew;
