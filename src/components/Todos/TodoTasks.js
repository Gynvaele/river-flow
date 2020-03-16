import connect from "react-redux/lib/connect/connect";
import React from "react";
import { DeleteNEWTask, moveToInWorkTodo } from "../../redux/Todos/action";
import { Post } from "../DrugAndDrop/Post/Post";
import { DropBox } from "../DrugAndDrop/DropBox/DropBox";

const TodoTasks = ({ todoTasks, dispatch }) => {
  const DeleteNewTodo = i => {
    dispatch(DeleteNEWTask(i));
  };
  const PinnedToWork = (elm, i) => {
    dispatch(moveToInWorkTodo(elm));
    DeleteNewTodo(i);
  };

  return (
    <DropBox id={"todoTasks"} className={"tasks-col"}>
      {todoTasks.length === 0 && (
        <div className={"tasks"}>
          <div className="title">No new todos yet.</div>
        </div>
      )}
      {todoTasks.length !== 0 && (
        <div className="tasks">
          <div className={"title"}>New ToDos ({todoTasks.length}):</div>
          {todoTasks.map((elm, i) => {
            return (
              <Post key={"post" + i} id={"todo" + i} className={"posts"} draggable={true} PinnedToWork={PinnedToWork}>
                <div className="container">
                  <div className="post-title">{elm.title}</div>
                  <div className="post-content">
                    <h4>{elm.description}</h4>
                    <p>{elm.fullText}</p>
                  </div>
                  <button onClick={() => PinnedToWork(elm, i)}>InWork</button>
                  <button onClick={() => DeleteNewTodo(i)}>Delete {"todo"}</button>
                </div>
              </Post>
            );
          })}
        </div>
      )}
    </DropBox>
  );
};

export default connect(({ todoTasks }) => ({ todoTasks }))(TodoTasks);
