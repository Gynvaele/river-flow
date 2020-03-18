import { CREATE_NEW_TASK, DELETE_TASK, MOVER } from "../types";
import { store } from "../../App";

export const CreateNewTask = post => {
  console.log(post);
  return {
    type: CREATE_NEW_TASK,
    data: post,
  };
};
//
// export const asyncCreate = post => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(CreateNewTask(post));
//     }, 1000);
//   };
// };

export const DeleteTask = id => {
  const { tasks } = store.getState();
  console.log(id);
  tasks.splice(id - 1, 1);
  console.log(store.getState());
  return {
    type: DELETE_TASK,
    data: tasks,
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
    data: tasks,
  };
};
