import {
  CREATE_NEW_TODO,
  DELETE_INWORK_TODO,
  DELETE_NEW_TODO,
  MOVE_TO_INWORK_TASKS,
  REMOVE_TO_NEW_TASKS,
} from "../types";
import { store } from "../../App";

export const CreateNewTask = post => {
  return {
    type: CREATE_NEW_TODO,
    data: post,
  };
};

export const DeleteNEWTask = i => {
  const { todoTasks } = store.getState();
  todoTasks.splice(i, 1);
  console.log(store.getState());
  return {
    type: DELETE_NEW_TODO,
    data: todoTasks,
  };
};

export const deleteINWORKTask = i => {
  const { startedTasks } = store.getState();
  startedTasks.splice(i, 1);
  return {
    type: DELETE_INWORK_TODO,
    data: startedTasks,
  };
};

export const moveToInWorkTodo = elm => {
  return {
    type: MOVE_TO_INWORK_TASKS,
    data: elm,
  };
};

export const removeTo_todoTasks = elm => {
  return {
    type: REMOVE_TO_NEW_TASKS,
    data: elm,
  };
};
