import connect from "react-redux/lib/connect/connect";
import React from "react";
import { deleteINWORKTask, removeToNewTodo } from "../../redux/Todos/action";

const StartedTasks = ({ todoInWork, dispatch }) => {
  const DeleteInWorkTodo = i => {
    dispatch(deleteINWORKTask(i));
  };

  const RemoveToNew = (elm, i) => {
    dispatch(removeToNewTodo(elm));
    DeleteInWorkTodo(i);
  };

  return (
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
  );
};

export default connect(({ todoInWork }) => ({ todoInWork }))(StartedTasks);
