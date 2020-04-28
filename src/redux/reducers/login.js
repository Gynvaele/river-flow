import { OBTAIN_LOGIN_DATA, OBTAIN_LOGIN_ERROR, START_LOGIN } from "../actions";

const initialState = {
  isLoading: false,
  isAuth: false,
  errors: [],
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        errors: [],
      };
    case OBTAIN_LOGIN_DATA:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        errors: [],
      };
    case OBTAIN_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errors: action.payload,
      };
    // case START_FINISH_REGISTER:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isAuth: false,
    //     errors: [],
    //   };
    // case OBTAIN_FINISH_DATA:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isAuth: true,
    //     errors: [],
    //   };
    // case SET_AUTH:
    //   return {state, isAuth: action.payload};
    default:
      return state;
  }
}
