import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import rootreducer from "./reducers"
export default createStore(rootreducer, applyMiddleware(thunk)) 