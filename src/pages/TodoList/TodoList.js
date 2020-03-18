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
        <div className="tasks-col">
          <div className="tasks">
            <div className={"title"}>Done</div>
          </div>
        </div>
        <div className="tasks-col">
          <div className="tasks">
            <div className={"title"}>Closed</div>
          </div>
        </div>
      </div>
      <div className={"modalWindow-container"}>
        <NewTaskModal />
      </div>
    </div>
  );
};
