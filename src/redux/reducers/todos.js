import { UPDATE_TASKS } from "../actions";

const initialState = {
  tasks: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
export default todosReducer;
