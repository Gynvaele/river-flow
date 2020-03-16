import connect from "react-redux/lib/connect/connect";
import React from "react";
import { deleteINWORKTask, removeTo_todoTasks } from "../../redux/Todos/action";
import { DropBox } from "../DrugAndDrop/DropBox/DropBox";
import { Post } from "../DrugAndDrop/Post/Post";

const StartedTasks = ({ startedTasks, dispatch }) => {
  const DeleteInWorkTodo = i => {
    dispatch(deleteINWORKTask(i));
  };

  const RemoveToNew = (elm, i) => {
    dispatch(removeTo_todoTasks(elm));
    DeleteInWorkTodo(i);
  };

  return (
    <DropBox className={"tasks-col"} id={"startedTasks"}>
      {startedTasks.length === 0 && (
        <div className={"tasks"}>
          <div className="title">No todos in work yet.</div>
        </div>
      )}
      {startedTasks.length !== 0 && (
        <div className="tasks">
          <div className={"title"}>
            {"ToDo"} in work ({startedTasks.length}):
          </div>
          {startedTasks.map((elm, i) => {
            return (
              <Post key={"post" + i} className={"posts"} draggable={true}>
                <div className="container">
                  <div className="post-title">{elm.title}</div>
                  <div className="post-content">
                    <h4>{elm.description}</h4>
                    <p>{elm.fullText}</p>
                  </div>
                  <button onClick={() => RemoveToNew(elm, i)}>Remove to New</button>
                  <button onClick={() => DeleteInWorkTodo(i)}>Delete {"todo"}</button>
                </div>
              </Post>
            );
          })}
        </div>
      )}
    </DropBox>
  );
};

export default connect(({ startedTasks }) => ({ startedTasks }))(StartedTasks);
