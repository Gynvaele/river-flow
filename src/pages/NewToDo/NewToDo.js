import React from "react";
import CreateNewTodo from "../../components/CreateNewToDo/CreateNewTodo";
import TodoTasks from "../../components/Todos/TodoTasks";
import StartedTasks from "../../components/StartedTasks/StartedTasks";

export const NewToDo = () => {

  return (
    <div>
      <CreateNewTodo/>
      <TodoTasks/>
      <StartedTasks/>
    </div>
  );
};
