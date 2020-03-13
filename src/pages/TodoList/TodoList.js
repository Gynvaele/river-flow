import React from "react";
import TodoTasks from "../../components/Todos/TodoTasks";
import StartedTasks from "../../components/StartedTasks/StartedTasks";
import { NewTaskModal } from "../../components/CreateNewToDo/openModal";

export const TodoList = () => {
  return (
    <div>
      <TodoTasks />
      <StartedTasks />
      <div>
        <NewTaskModal />
      </div>
    </div>
  );
};
