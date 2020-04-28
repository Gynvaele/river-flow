import { combineReducers } from "redux";
import todosReducer from "./todos";
import loginReducer from "./login";
export default () => combineReducers({ todos: todosReducer, login: loginReducer });
