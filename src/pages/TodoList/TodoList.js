import React from "react";
import TodoTasks from "../../components/Todos/TodoTasks";
import StartedTasks from "../../components/StartedTasks/StartedTasks";

export const TodoList = () => {
  return (
    <div>
      <TodoTasks />
      <StartedTasks />
    </div>
  );
};
