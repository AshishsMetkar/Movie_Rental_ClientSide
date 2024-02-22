import axios from "axios";
import * as actions from "./actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "genres";

// export const getAllGenres= ()=>(
//     {type:actions.GET_ALL_GENRES}
// )

// export const getAllGenres = () => (dispatch) => {
//   axios
//     .get(apiEndPoint)
//     .then((response) =>
//       dispatch({
//         type: actions.GET_ALL_GENRES,
//         payload: { genres: response.data },
//       })
//     )
//     .catch((err) => console.log(err.message));
// };
export const getAllGenres = (data) => (dispatch) => {
  axios
    .post(apiEndPoint+"/pfs",data)
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_GENRES,
        payload: { genres: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};

export const getTotalNumberOfGenres = () => (dispatch) => {
  axios
    .get(apiEndPoint + "/count")
    .then((response) =>
      dispatch({
        type: actions.GET_TOTAL_NUMBER_OF_GENRES,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};
// export const addGenre = (data) => ({
//   type: actions.ADD_GENRE,
//   payload: { data },
//   // id: Date.now()
// });
export const addGenre = (data) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, data, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({ type: actions.ADD_GENRE, payload: { data: response.data } })
    )
    .catch((err) => console.log(err.message));
};

// export const updateGenre = (data) => ({
//   type: actions.UPDATE_GENRE,
//   payload: { data },
// });
export const updateGenre = (data) => (dispatch, getState) => {
  const id = data._id;
  delete data._id;
  axios
    .put(apiEndPoint + "/" + id, data, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({ type: actions.UPDATE_GENRE, payload: { data: response.data } })
    )
    .catch((err) => console.log(err.message));
};
// export const deleteSelectedGenre = (id) => ({
//   type: actions.DELETE_SELECTED_GENRE,
//   //   id:id,
//   payload: { id },
// });

export const deleteSelectedGenre = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + "/" + id, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({
        type: actions.DELETE_SELECTED_GENRE,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};

export const getByGenreId = (id) => (dispatch) => {
  axios
    .get(apiEndPoint + "/" + id)
    .then((response) =>
      dispatch({
        type: actions.GET_BY_GENRE_ID,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};
