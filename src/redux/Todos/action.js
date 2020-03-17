import { CREATE_NEW_TASK, DELETE_TASK, MOVE_TO_INWORK_TASKS, MOVER, REMOVE_TO_NEW_TASKS } from "../types";
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

export const Mover = (box_id, card_id) => {
  const { tasks } = store.getState();
  const changed = tasks.filter(tasks => +tasks.id === +card_id);
  console.log(tasks);
  console.log(box_id);
  console.log(card_id);
  console.log(changed);

  return {
    type: MOVER,
    data: (changed[0].id = box_id),
  };
};
