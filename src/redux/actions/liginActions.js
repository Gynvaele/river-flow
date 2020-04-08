import {
  // SET_AUTH,
  START_LOGIN,
  OBTAIN_LOGIN_DATA,
  OBTAIN_LOGIN_ERROR,
  // OBTAIN_FINISH_DATA,
  // START_FINISH_REGISTER,
} from "../types";

function startLogin() {
  return {
    type: START_LOGIN,
  };
}

function obtainLoginData() {
  return {
    type: OBTAIN_LOGIN_DATA,
  };
}

function obtainLoginError(error) {
  return {
    type: OBTAIN_LOGIN_ERROR,
    payload: error,
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(startLogin());

    let loginData = {
      email: email,
      password: password,
    };

    const response = JSON.parse(localStorage.getItem("users"));
    response.filter(response.email === email);
    if (response.email === loginData.email && response.password === loginData.password) {
      return dispatch(obtainLoginData());
    } else {
      return dispatch(obtainLoginError());
    }
  };
}
