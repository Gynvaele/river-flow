import React from "react";
import { DeleteTask, removeTo_todoTasks } from "../../redux/Todos/action";
import { DropBox } from "../DrugAndDrop/DropBox/DropBox";
import { Post } from "../DrugAndDrop/Post/Post";
import connect from "react-redux/lib/connect/connect";

const StartedTasks = ({ tasks, dispatch }) => {
  const Delete = i => {
    dispatch(DeleteTask(i));
  };

  const RemoveToNew = (elm, i) => {
    dispatch(removeTo_todoTasks(elm));
    DeleteTask(i);
  };

  const startedTasks = tasks.filter(tasks => tasks.flag === "started");

  return (
    <DropBox id={"todoTasks"} className={"tasks-col"}>
      {startedTasks.length === 0 && (
        <div className={"tasks"}>
          <div className="title">You have no eny started tasks.</div>
        </div>
      )}
      {startedTasks.length !== 0 && (
        <div className="tasks">
          <div className={"title"}>New ToDos ({startedTasks.length}):</div>
          {startedTasks.map((elm, i) => {
            return (
              <Post key={"post" + i} id={"todo" + i} className={"posts"} draggable={true} PinnedToWork={RemoveToNew}>
                <div className="container">
                  <div className="post-title">{elm.title}</div>
                  <div className="post-content">
                    <h4>{elm.description}</h4>
                    <p>{elm.fullText}</p>
                  </div>
                  <button onClick={() => RemoveToNew(elm, i)}>InWork</button>
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

export default connect(({ tasks }) => ({ tasks }))(StartedTasks);
