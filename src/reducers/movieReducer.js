import * as actions from "../actions/actionTypes";
// import { getMovies } from "../services/fakeMovieService";

export const movieReducer = (
  state = { movies: [], currentMovie:[], totalMovies: 0 },
  action
) => {
  switch (action.type) {
    case actions.GET_ALL_MOVIES:
      return { ...state,movies: action.payload.movies };

    case actions.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie._id !== action.payload.data._id
        ),
      };

    case actions.GET_TOTAL_NUMBER_OF_MOVIES:
      return {
       ...state, totalMovies: action.payload.data.totalMovies
      };

      case actions.GET_BY_MOVIE_ID:
        return{
          ...state, currentMovie:action.payload.data
        }
    case actions.UPDATE_MOVIE: {
      const index = state.movies.findIndex(
        (m) => m._id === action.payload.data._id
      );
      console.log(action.payload.data);
      const newMovie = [...state.movies];
      newMovie[index] = action.payload.data;
      return { 
        ...state,movies: newMovie };
    }

    case actions.ADD_MOVIE: {
      // const array = [
      //   ...state.movies,
      //   {
      //     _id: action.payload.data._id,
      //     title: action.payload.data.title,
      //     numberInSock: action.payload.data.numberInSock,
      //     dailyReturnRate: action.payload.data.dailyReturnRate,
      //     genre: action.payload.data.genre._id,
      //     liked: action.payload.data.liked,
      //   },
      // ];
      // return { movies: array };
      return { ...state,
        movies: [action.payload.data, ...state.movies] };
    }
    default:
      return state;
  }
};
