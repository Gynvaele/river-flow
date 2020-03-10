import {
  CREATE_NEW_TODO,
  DELETE_INWORK_TODO,
  DELETE_NEW_TODO,
  MOVE_TO_INWORK_TASKS,
  REMOVE_TO_NEW_TASKS,
} from "../types";

import { defaultData } from "../../data_mocked/data";

const initialState = {
  newTodo: defaultData,
  todoInWork: [],
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TODO:
      return { ...state, newTodo: [...state.newTodo, action.data] };
    case DELETE_NEW_TODO:
      return { ...state, newTodo: [...action.data] };
    case MOVE_TO_INWORK_TASKS:
      return { ...state, todoInWork: [...state.todoInWork, action.data] };
    case REMOVE_TO_NEW_TASKS:
      return { ...state, newTodo: [...state.newTodo, action.data] };
    case DELETE_INWORK_TODO:
      return { ...state, todoInWork: [...action.data] };
    default:
      return state;
  }
};
