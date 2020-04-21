import { CREATE_NEW_TASK, DELETE_TASK, MOVER } from "../types";
import { store } from "../../App";

export const CreateNewTask = post => {
  return {
    type: CREATE_NEW_TASK,
    data: post,
  };
};

export const DeleteTask = id => {
  const { tasks } = store.getState();
  const checkId = tasks => {
    return tasks.id === id;
  };
  const count = tasks.findIndex(checkId);
  tasks.splice(count, 1);
  return {
    type: DELETE_TASK,
    data: tasks,
  };
};

export const Mover = (box_id, card_id) => {
  const { tasks } = store.getState();
  const currentTask = tasks.filter(card => card.id === card_id);
  console.log(currentTask[0].flag);
  console.log("current task", currentTask[0].flag);
  currentTask[0].flag = box_id;
  console.log("current task", currentTask[0].flag);
  return {
    type: MOVER,
    data: [currentTask],
  };
};
