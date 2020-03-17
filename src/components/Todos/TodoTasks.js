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

  const toDoTasks = tasks.filter(tasks => tasks.flag === "started");

  return (
    <DropBox id={"todoTasks"} className={"tasks-col"}>
      {toDoTasks.length === 0 && (
        <div className={"tasks"}>
          <div className="title">You have no eny started tasks.</div>
        </div>
      )}
      {toDoTasks.length !== 0 && (
        <div className="tasks">
          <div className={"title"}>New ToDos ({toDoTasks.length}):</div>
          {toDoTasks.map((elm, i) => {
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
