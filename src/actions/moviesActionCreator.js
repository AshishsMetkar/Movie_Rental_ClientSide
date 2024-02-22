import * as actions from "./actionTypes";
import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "movies";

// export const getAllMovies = () => (dispatch) => {
//   axios
//     .get(apiEndPoint)
//     .then((response) =>
//       dispatch({
//         type: actions.GET_ALL_MOVIES,
//         payload: { movies: response.data },
//       })
//     )
//     .catch((err) => console.log(err.message));
// };
export const getAllMovies = (data) => (dispatch) => {
  axios
    .post(apiEndPoint+"/pfs",data)
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_MOVIES,
        payload: { movies: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};


export const getTotalNumberOfMovies = (genreName,titleName) => (dispatch) => {
  console.log(genreName)
  console.log(apiEndPoint + "/count?genreName=" + genreName + "titleName="+titleName);
  axios
    .get(apiEndPoint + "/count?genreName=" + genreName)
    .then((response) =>{
      dispatch({
        type: actions.GET_TOTAL_NUMBER_OF_MOVIES,
        payload: { data: response.data },
      })
      console.log(response.data);
}).catch(err=>console.log(err.message))
}

export const getByMovieId = (id) => (dispatch) => {
  axios
    .get(apiEndPoint + "/" + id)
    .then((response) =>
      dispatch({
        type: actions.GET_BY_MOVIE_ID,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};

export const addMovie = (data) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, data, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({ type: actions.ADD_MOVIE, payload: { data: response.data } })
    )
    .catch((err) => console.log(err.message));
};

export const updateMovie = (data) => (dispatch, getState) => {
  const id = data._id;
  delete data._id;
  console.log(data);
  axios
    .put(apiEndPoint + "/" + id, data, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({ type: actions.UPDATE_MOVIE, payload: { data: response.data } })
    )
    .catch((err) => console.log(err.message));
};

export const deleteMovie = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + "/" + id, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({
        type: actions.DELETE_MOVIE,
        payload: { data: response.data },
      })
    )
    .catch((err) => console.log(err.message));
};
