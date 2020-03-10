import React from "react";
import { useSelector } from "react-redux/lib/hooks/useSelector";
import { useDispatch } from "react-redux/lib/hooks/useDispatch";
import { deleteINWORKTask, DeleteNEWTask, moveToInWorkTodo, removeToNewTodo } from "../../redux/Todos/action";
import CreateNewTodo from "../../components/CreateNewToDo/CreateNewTodo";

export const NewToDo = () => {
  const dispatch = useDispatch();
  const { newTodo, todoInWork } = useSelector(({ newTodo, todoInWork }) => ({ newTodo, todoInWork }));

  const DeleteNewTodo = i => {
    dispatch(DeleteNEWTask(i));
  };
  const DeleteInWorkTodo = i => {
    dispatch(deleteINWORKTask(i));
  };

  const PinnedToWork = (elm, i) => {
    dispatch(moveToInWorkTodo(elm));
    DeleteNewTodo(i);
  };

  const RemoveToNew = (elm, i) => {
    dispatch(removeToNewTodo(elm));
    DeleteInWorkTodo(i);
  };
  return (
    <div>
      <CreateNewTodo />
      <div>
        {newTodo.length === 0 && <h3>No new todos yet.</h3>}
        {newTodo.length !== 0 && (
          <ul>
            <h3>New ToDos:</h3>
            {newTodo.map((elm, i) => {
              return (
                <li key={"post" + i}>
                  {elm.title}
                  <button onClick={() => PinnedToWork(elm, i)}>InWork</button>
                  <button onClick={() => DeleteNewTodo(i)}>Delete todo</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div>
        {todoInWork.length === 0 && <h3>No todos in work yet.</h3>}
        {todoInWork.length !== 0 && (
          <ul>
            <h3>ToDo in work:</h3>
            {todoInWork.map((elm, i) => {
              return (
                <li key={"post" + i}>
                  {elm.title}
                  <button onClick={() => RemoveToNew(elm, i)}>Remove to New</button>
                  <button onClick={() => DeleteInWorkTodo(i)}>Delete todo</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
