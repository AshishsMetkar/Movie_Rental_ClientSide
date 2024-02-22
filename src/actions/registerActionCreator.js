import * as actions from "./actionTypes";

import axios from "axios";
const apiEndPoint = process.env.REACT_APP_API_URL + "users";

export const addUsers = (data) => (dispatch) => {
  axios
    .post(apiEndPoint, data)
    .then((reponse) =>
      dispatch({ type: actions.REGISTER_USERS, payload: { users: reponse.data } })
    )
    .catch((err) => console.log(err.message));
}
