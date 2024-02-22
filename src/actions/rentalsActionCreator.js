import axios from "axios";
import * as actions from "./actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "rentals";

export const getAllRentals= () => (dispatch) => {
  axios
    .get(apiEndPoint)
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_RENTALS,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};

export const deleteRental = (id) => (dispatch, getState) => {
    axios
      .delete(apiEndPoint + "/" + id, {
        headers: { "x-auth-token": getState().loginReducer.token },
      })
      .then((response) =>
        dispatch({
          type: actions.DELETE_RENTALS,
          payload: { data: response.data },
        })
      )
      .catch((err) => console.log(err.message));
  };

  export const addRentals = (data) => (dispatch, getState) => {
    axios
      .post(apiEndPoint, data, {
        headers: { "x-auth-token": getState().loginReducer.token },
      })
      .then((response) =>
        dispatch({ type: actions.ADD_RENTALS, payload: { data: response.data } })
      )
      .catch((err) => console.log(err.message));
  };
  
  
    export const rentalUpdate = (id) => (dispatch, getState) => {
      // const id = data._id;
      // delete data._id;
      // console.log(data);
      axios
        .patch(apiEndPoint + "/" + id, {}, {
          headers: { "x-auth-token": getState().loginReducer.token },
        })
        .then((response) =>{
          dispatch({ type: actions.UPDATE_RENTALS, payload: { data: response.data } })}
        )
        .catch((err) => console.log(err.message));
  }