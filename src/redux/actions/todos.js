import { defaultData } from "../../data_mocked/data";

export const UPDATE_TASKS = "UPDATE_TASKS";

function updateTasks(tasks) {
  return {
    type: UPDATE_TASKS,
    payload: tasks,
  };
}

export const obtainTasks = () => (dispatch, getState) => {
  const tasksFromServer = defaultData;
  setTimeout(() => {
    dispatch(updateTasks(tasksFromServer));
  }, 2000);
};

export const CreateNewTask = post => (dispatch, getState) => {
  setTimeout(() => {
    /// send data to server and waiting 2sec for response...
    const tasks = getState().todos.tasks;
    const updatedTasks = [...tasks, post];
    dispatch(updateTasks(updatedTasks));
  }, 2000);
};

export const DeleteTask = id => (dispatch, getState) => {
  setTimeout(() => {
    /// send data to server and waiting 2sec for response...
    const tasks = getState().todos.tasks;
    const updatedTasks = tasks.filter(card => card.id !== id);
    dispatch(updateTasks(updatedTasks));
  }, 2000);
};

export const Mover = (box_id, card_id) => (dispatch, getState) => {
  const tasks = getState().todos.tasks;
  const updatedTasks = tasks.map(card => {
    if (card.id === card_id) {
      console.log("updated", card_id, box_id);
      return { ...card, flag: box_id };
    }
    return card;
  });
  dispatch(updateTasks(updatedTasks));
};
