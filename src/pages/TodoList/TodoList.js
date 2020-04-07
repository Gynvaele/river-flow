import React from "react";
import Task from "../../components/Todos/TodoTasks";
import { NewTaskModal } from "../../components/CreateNewToDo/openModal";
import "./style.scss";

export const TodoList = () => {
  return (
    <div>
      <div className={"tasks-container"}>
        <Task currentBox={"todoTasks"} />
        <Task currentBox={"startedTasks"} />
        <Task currentBox={"Done"} />
        <Task currentBox={"Closed"} />
      </div>
      <div className={"modalWindow-container"}>
        <NewTaskModal />
      </div>
    </div>
  );
};
