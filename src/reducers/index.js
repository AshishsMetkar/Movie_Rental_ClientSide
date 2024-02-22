import { combineReducers } from "redux";
import { genreReducer } from "./genreReducer.js";
import { customerReducer } from "./customerReducer.js";
import { movieReducer } from "./movieReducer.js";
import { registerReducer } from "./registerReducer.js";
import { loginReducer } from "./loginReducer.js";
import {rentalsReducer} from "./rentalsReducer.js"
export default combineReducers({
  genreReducer,
  customerReducer,
  movieReducer,
  registerReducer,
  loginReducer,
  rentalsReducer
});
