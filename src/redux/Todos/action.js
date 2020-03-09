import {
    CREATE_NEW_TODO,
    DELETE_INWORK_TODO,
    DELETE_NEW_TODO,
    MOVE_TO_INWORK_TASKS,
    REMOVE_TO_NEW_TASKS
} from "../types";
import {store} from "../../App";

export const CreateNewTask = (post) => {
    return {
        type: CREATE_NEW_TODO,
        data: post,
    }
};

export const DeleteNEWTask = (i) => {
    const {newTodo} = store.getState();
    newTodo.splice(i, 1);
    console.log(store.getState());
    return {
        type: DELETE_NEW_TODO,
        data: newTodo,
    };
};


export const deleteINWORKTask = (i) => {
    const {todoInWork} = store.getState();
    todoInWork.splice(i, 1);
    return {
        type: DELETE_INWORK_TODO,
        data: todoInWork,
    };
};

export const moveToInWorkTodo = (elm) => {
    return {
        type: MOVE_TO_INWORK_TASKS,
        data: elm
    }
};

export const removeToNewTodo = (elm) => {
    return {
        type: REMOVE_TO_NEW_TASKS,
        data: elm,
    };
};
