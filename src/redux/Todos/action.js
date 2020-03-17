import { CREATE_NEW_TASK, DELETE_TASK, MOVE_TO_INWORK_TASKS, REMOVE_TO_NEW_TASKS } from "../types";
import { store } from "../../App";

export const CreateNewTask = post => {
  return {
    type: CREATE_NEW_TASK,
    data: post,
  };
};

export const DeleteTask = i => {
  const { tasks } = store.getState();
  tasks.splice(i, 1);
  console.log(store.getState());
  return {
    type: DELETE_TASK,
    data: tasks,
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
