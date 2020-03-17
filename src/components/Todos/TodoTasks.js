import connect from "react-redux/lib/connect/connect";
import React from "react";
import { DeleteTask, moveToInWorkTodo } from "../../redux/Todos/action";
import { Post } from "../DrugAndDrop/Post/Post";
import { DropBox } from "../DrugAndDrop/DropBox/DropBox";

const TodoTasks = ({ tasks, dispatch }) => {
  const Delete = i => {
    dispatch(DeleteTask(i));
  };
  const PinnedToWork = (elm, i) => {
    dispatch(moveToInWorkTodo(elm));
    DeleteTask(i);
  };

  return (
    <DropBox id={"todoTasks"} className={"tasks-col"}>
      {tasks.filter(flag => flag === "toDo") === true ? (
        <div className={"tasks"}>
          <div className="title">No new todos yet.</div>
        </div>
      ) : (
        <div className="tasks">
          <div className={"title"}>New ToDos ({tasks.length}):</div>
          {tasks.map((elm, i) => {
            return (
              <Post key={"post" + i} id={"todo" + i} className={"posts"} draggable={true} PinnedToWork={PinnedToWork}>
                <div className="container">
                  <div className="post-title">{elm.title}</div>
                  <div className="post-content">
                    <h4>{elm.description}</h4>
                    <p>{elm.fullText}</p>
                  </div>
                  <button onClick={() => PinnedToWork(elm, i)}>InWork</button>
                  <button onClick={() => Delete(i)}>Delete {"todo"}</button>
                </div>
              </Post>
            );
          })}
        </div>
      )}
    </DropBox>
  );
};

export default connect(({ tasks }) => ({ tasks }))(TodoTasks);
