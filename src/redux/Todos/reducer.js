import { CREATE_NEW_TASK, DELETE_TASK, MOVE_TO_INWORK_TASKS, REMOVE_TO_NEW_TASKS } from "../types";

import { defaultData } from "../../data_mocked/data";

const initialState = {
  tasks: defaultData,
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TASK:
      return { ...state, tasks: [...state.tasks, action.data] };
    case DELETE_TASK:
      return { ...state, tasks: [...action.data] };
    case MOVE_TO_INWORK_TASKS:
      return { ...state, tasks: [...state.tasks, action.data] };
    case REMOVE_TO_NEW_TASKS:
      return { ...state, tasks: [...state.tasks, action.data] };
    default:
      return state;
  }
};
