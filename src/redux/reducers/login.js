import {
  SET_AUTH,
  START_LOGIN,
  OBTAIN_LOGIN_DATA,
  OBTAIN_LOGIN_ERROR,
  OBTAIN_FINISH_DATA,
  START_FINISH_REGISTER,
} from "../types";

const initialState = {
  isLoading: false,
  isAuth: false,
  errors: [],
};

export default function loginApp(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state;
    case START_LOGIN:
      return state;
    case OBTAIN_LOGIN_DATA:
      return state;
    case OBTAIN_LOGIN_ERROR:
      return state;
    case OBTAIN_FINISH_DATA:
      return state;
    case START_FINISH_REGISTER:
      return state;
    default:
      return state;
  }
}
