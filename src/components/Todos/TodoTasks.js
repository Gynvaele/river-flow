import connect from "react-redux/lib/connect/connect";
import React from "react";
import {DeleteNEWTask, moveToInWorkTodo} from "../../redux/Todos/action";

const TodoTasks = ({newTodo, dispatch}) => {


  const DeleteNewTodo = i => {
    dispatch(DeleteNEWTask(i));
  };
  const PinnedToWork = (elm, i) => {
    dispatch(moveToInWorkTodo(elm));
    DeleteNewTodo(i);
  };


  return (
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
  );
};

export default connect(({newTodo}) => ({newTodo}))(TodoTasks);