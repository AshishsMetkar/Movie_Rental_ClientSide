import * as actions from "../actions/actionTypes";
// import { genres, getGenres } from "../services/fakeGenreService";

export const genreReducer = (
  state = { genres: [], currentGenre: [] ,totalGenres:0},
  action
) => {
  switch (action.type) {
    case actions.GET_ALL_GENRES:
      return { ...state, genres: action.payload.genres };

    case actions.GET_BY_GENRE_ID:
      return {
        ...state,
        currentGenre: action.payload.data,
      };
    case actions.GET_TOTAL_NUMBER_OF_GENRES: {
        return{
          ...state , totalGenres:action.payload.data.totalGenres
        }
    }
    case actions.DELETE_SELECTED_GENRE:
      return {
        ...state,
        genres: state.genres.filter(
          (genre) => genre._id !== action.payload.data._id
        ),
      };

    case actions.ADD_GENRE: {
      return { ...state, genres: [...state.genres, action.payload.data.name] };
    }
    case actions.UPDATE_GENRE: {
      const index = state.genres.findIndex(
        (g) => g._id === action.payload.data._id
      );
      const newGenre = [...state.genres];
      newGenre[index] = action.payload.data;
      return { ...state, genres: newGenre };
    }
    default:
      return state;
  }
};
