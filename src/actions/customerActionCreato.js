import * as actions from "./actionTypes";
import axios from "axios";
const apiEndPoint = process.env.REACT_APP_API_URL + "customers";
// export const getAllCustomers = () => ({ type: actions.GET_ALL_CUSTOMERS });
export const getAllCustomers = () => (dispatch) => {
  axios
    .get(apiEndPoint)
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_CUSTOMERS,
        payload: { customers: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};

// export const deleteCustomer = (id) => ({
//   type: actions.DELETE_CUSTOMER,
//   //   id:id,
//   payload: { id },
// });

export const addCustomer = (data) => (dispatch, getState) => {
  console.log("ggggg");
  console.log(data);
  axios
    .post(apiEndPoint, data, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({ type: actions.ADD_CUSTOMER, payload: { data: response.data } })
    )
    .catch((err) => console.log(err.message));
};

export const updateCustomer = (data) => (dispatch, getState) => {
  const id =data._id
  delete data._id
  axios
    .put(apiEndPoint + "/" + id, data,{
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({
        type: actions.UPDATE_CUSTOMER,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err));
};

export const deleteCustomer = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + "/" + id, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({
        type: actions.DELETE_CUSTOMER,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};

export const getCustomerByID = (id) => (dispatch) => {
  axios
    .get(apiEndPoint+"/"+id)
    .then((response) =>{dispatch({
      type: actions.GET_BY_CUSTOMER_ID,
      payload: { customers: response.data },
    })
  console.log(response.data);
  }
      
    )
    .catch((err) => console.log(err.message));
};