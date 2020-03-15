import React from "react";
import TodoTasks from "../../components/Todos/TodoTasks";
import StartedTasks from "../../components/StartedTasks/StartedTasks";
import { NewTaskModal } from "../../components/CreateNewToDo/openModal";
import "./style.scss";

export const TodoList = () => {
  return (
    <div>
      <div className={"tasks-container"}>
        <TodoTasks />
        <StartedTasks />
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
