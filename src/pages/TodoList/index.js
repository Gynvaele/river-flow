import React, { useEffect, useMemo } from "react";
import Task from "../../components/Todos/TodoTasks";
import { NewTaskModal } from "../../components/CreateNewToDo/openModal";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { obtainTasks } from "../../redux/actions";

export const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtainTasks());
  }, [dispatch]);

  const dashes = ["todoTasks", "startedTasks", "Done", "Closed"];

  const tasks = useSelector(({ todos }) => todos.tasks);

  const taskForDashes = useMemo(() => {
    return tasks.reduce((summ, el) => {
      let prevItems = summ[el.flag] ? summ[el.flag] : [];
      return { ...summ, [el.flag]: [...prevItems, el] };
    }, {});
  }, [tasks]);

  return (
    <div>
      <div className={"tasks-container"}>
        {dashes.map(dash => (
          <Task key={dash} currentBox={dash} taskInBox={taskForDashes[dash]} />
        ))}
      </div>
      <div className={"modalWindow-container"}>
        <NewTaskModal />
      </div>
    </div>
  );
};
