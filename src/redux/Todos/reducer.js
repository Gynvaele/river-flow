import {
  CREATE_NEW_TODO,
  DELETE_INWORK_TODO,
  DELETE_NEW_TODO,
  MOVE_TO_INWORK_TASKS,
  REMOVE_TO_NEW_TASKS,
} from "../types";

import { default_startedTasks, default_todos } from "../../data_mocked/data";

const initialState = {
  todoTasks: default_todos,
  startedTasks: default_startedTasks,
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TODO:
      return { ...state, todoTasks: [...state.todoTasks, action.data] };
    case DELETE_NEW_TODO:
      return { ...state, todoTasks: [...action.data] };
    case MOVE_TO_INWORK_TASKS:
      return { ...state, startedTasks: [...state.startedTasks, action.data] };
    case REMOVE_TO_NEW_TASKS:
      return { ...state, todoTasks: [...state.todoTasks, action.data] };
    case DELETE_INWORK_TODO:
      return { ...state, startedTasks: [...action.data] };
    default:
      return state;
  }
};
